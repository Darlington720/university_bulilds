const express = require("express");
const path = require("path");
const morgan = require("morgan");
const XLSX = require("xlsx");
const bodyParser = require("body-parser");

const cors = require("cors");

var { baseIp, port, database } = require("./config");

const fileUpload = require("express-fileupload");

const app = express();
const secret = "mySecret";

app.use(cors());
app.use(express.static(__dirname + "/public"));

app.use(fileUpload());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Morgan Enabled...");
}

app.use(express.static(path.join(__dirname, "dist")));

app.post("/api/importExceltodb", async (req, res) => {
  try {
    // console.log("received This ", req.body.excelObj);
    if (!req.files) {
      res.send({
        status: false,
        message: "No files Uploaded",
      });
    } else {
      let xlsFile = [];
      // xlsFile = req.files.excelFile;
      // console.log("Files i got ", Array.isArray(req.files.excelFile));
      if (!Array.isArray(req.files.excelFile)) {
        xlsFile.push(req.files.excelFile);
      } else {
        xlsFile = req.files.excelFile;
      }

      console.log("Files i got ", xlsFile);
      const worksheets = [];

      const x = await xlsFile.map(async (csvFile) => {
        // Save all the sent files
        await csvFile.mv(__dirname + "/upload/excel_sheets/" + csvFile.name);

        // Read each of the saved files
        const workbook = XLSX.readFile(
          `${__dirname}/upload/excel_sheets/${csvFile.name}`
        );

        // Get the first worksheet in the workbook
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];

        // Convert the worksheet to a JSON object
        const json = XLSX.utils.sheet_to_json(worksheet);

        // console.log("Extracted json", json);

        // console.log("Json data gen", json);
        worksheets.push(json);
      });

      Promise.all(x).then(async () => {
        const combinedWorksheet = worksheets.reduce((result, worksheet) => {
          return result.concat(worksheet);
        }, []);
        console.log("Final worksheet", combinedWorksheet.length);
        const arr = combinedWorksheet.map((obj) => {
          const newObj = {};
          for (const key in obj) {
            // let filteredKey = key.replace(/"/g, "");
            // let filteredKey = key.replace(/("|""|""")/g, "");
            let filteredKey = key.replace(/("|""|"""|\\\\)/g, "");
            newObj[filteredKey] = obj[key].replace(/"/g, "");
          }
          return newObj;
        });

        // filter out the header rows in each excel file provided
        const modifiedArray = arr.filter((s) => s.stdno !== "stdno");

        // console.log("Modified Arr", modifiedArray);
        // res.send({
        //   data: mod,
        // });

        // try {
        // } catch (error) {
        //   console.log("error", error);
        //   res.send({
        //     success: false,
        //     message:
        //       "The files sent contain an unknown error, This error is related to the columns of the files sent",
        //   });
        // }

        try {
          const fieldsToInsertBiodata = modifiedArray
            .map((field, index) => {
              // const noSpecialChars = str.replace(/[^a-zA-Z0-9 ]/g, "");
              // if (index == 0) return;
              // console.log(field);
              // res.send(field);

              return {
                stdno: field.stdno.replace(/[^a-zA-Z0-9 ]/g, ""),
                regno: field.regno.replace(/[^a-zA-Z0-9/ ]/g, ""),
                name: field.name.replace(/[^a-zA-Z0-9 ]/g, ""),
                email: `${field.email.replace(/[^a-zA-Z0-9 ]/g, "")}`,
                admissions_form_no: "",
                sex: field.sex.replace(/[^a-zA-Z0-9 ]/g, ""),
                telno: field.telno
                  ? field.telno.replace(/[^a-zA-Z0-9 ]/g, "")
                  : "",
                entry_ac_yr: field.entry_ac_yr
                  ? field.entry_ac_yr.replace(/[^a-zA-Z0-9 ]/g, "")
                  : "",
                entry_study_yr: field.study_yr.replace(/[^a-zA-Z0-9 ]/g, ""),
                nationality: field.nationality.replace(/[^a-zA-Z0-9 ]/g, ""),
                facultycode: field.facultycode.replace(/[^a-zA-Z0-9 ]/g, ""),
                progtitle: field.progtitle.replace(/[^a-zA-Z0-9 ]/g, ""),
                progcode: field.progcode.replace(/[^a-zA-Z0-9 ]/g, ""),
                prog_alias: field.prog_alias.replace(/[^a-zA-Z0-9 ]/g, ""),

                programlevel: field.programlevel.replace(/[^a-zA-Z0-9 ]/g, ""),
                progduration: "",
                facultytitle: field.facultytitle.replace(/[^a-zA-Z0-9 ]/g, ""),
                intake: field.intake.replace(/[^a-zA-Z0-9 ]/g, ""),
                campus: field.campus.replace(/[^a-zA-Z0-9 ]/g, ""),
                sponsorship: field.sponsorship.replace(/[^a-zA-Z0-9 ]/g, ""),
                residence_status: field.residence_status.replace(
                  /[^a-zA-Z0-9 ]/g,
                  ""
                ),
                current_sem: field.sem.replace(/[^a-zA-Z0-9 ]/g, ""),
                study_yr: field.study_yr.replace(/[^a-zA-Z0-9 ]/g, ""),
                study_time: field.study_time.replace(/[^a-zA-Z0-9 ]/g, ""),
                collegetitle: field.collegetitle.replace(/[^a-zA-Z0-9 ]/g, ""),
                std_status: 0,
                progversion: "",
              };
            })
            .filter((row) => {
              return row !== undefined;
            });

          // console.log("Bio data", fieldsToInsertBiodata);

          const fieldsToInsert = modifiedArray
            .map((field, index) => {
              const noWhiteSpace = field.total_bill.replace(/\s/g, "");
              var cleanTotalBill = noWhiteSpace.replace(/[^a-zA-Z0-9. ]/g, "");

              const noWhiteSpace2 = field.total_paid.replace(/\s/g, "");
              var cleanTotalPaid = noWhiteSpace2.replace(/[^a-zA-Z0-9. ]/g, "");

              const noWhiteSpace3 = field.total_credit.replace(/\s/g, "");
              var cleanTotalCredit = noWhiteSpace3.replace(
                /[^a-zA-Z0-9. ]/g,
                ""
              );

              const noWhiteSpace4 = field.total_due.replace(/\s/g, "");
              var cleanTotalDue = noWhiteSpace4.replace(/[^\d]+/g, "");

              // const noSpecialChars = str.replace(/[^a-zA-Z0-9 ]/g, "");
              // if (index == 0) return;

              // res.send(field);
              return {
                stu_no: field.stdno.replace(/[^a-zA-Z0-9 ]/g, ""),
                acc_yr: field.accyr.replace(/[^a-zA-Z0-9 ]/g, ""),
                study_yr: field.study_yr.replace(/[^a-zA-Z0-9 ]/g, ""),
                sem: field.sem.replace(/[^a-zA-Z0-9 ]/g, ""),
                reg_status: field.reg_status.replace(/[^a-zA-Z0-9 ]/g, ""),
                total_bill: cleanTotalBill,
                total_credit: cleanTotalCredit,
                tatal_paid: cleanTotalPaid,
                paid_percentage: isNaN(
                  parseInt(
                    ((parseInt(cleanTotalPaid) + parseInt(cleanTotalCredit)) /
                      parseInt(cleanTotalBill)) *
                      100
                  )
                )
                  ? 0
                  : parseInt(
                      ((parseInt(cleanTotalPaid) + parseInt(cleanTotalCredit)) /
                        parseInt(cleanTotalBill)) *
                        100
                    ),
                total_due: cleanTotalDue,
              };
            })
            .filter((row) => {
              return row !== undefined;
            });

          const newStudents = await database("students_biodata")
            .insert(fieldsToInsertBiodata)
            .onConflict("stdno")
            .ignore();

          await database("uploaded_excel_forms_fees").insert({
            file_name: xlsFile[0].name,
            upload_date: new Date(),
          });

          database("student_paid_fess")
            .whereIn(
              "stu_no",
              fieldsToInsert.map((d) => d.stu_no)
            )
            .whereIn(
              "study_yr",
              fieldsToInsert.map((d) => d.study_yr)
            )
            .whereIn(
              "sem",
              fieldsToInsert.map((d) => d.sem)
            )
            .then(async (result) => {
              console.log("result", result.length);
              console.log("Modified Arr", modifiedArray.length);
              if (result.length == 0) {
                database("student_paid_fess")
                  .insert(fieldsToInsert)
                  .then((data) => {
                    res.status(200).send({
                      success: true,
                      message: "Excel Sheets Uploded Successfully",
                    });
                    // console.log("Data", data);
                  })
                  .catch((err) => {
                    console.log("Failed to save the data", err);
                    // res.status(400).send("fail");
                  });
              } else {
                // const newStu = fieldsToInsert.filter(
                //   (student) =>
                //     !result.some(
                //       (existingStu) =>
                //         student.stu_no === existingStu.stu_no &&
                //         student.study_yr === existingStu.study_yr &&
                //         student.sem === existingStu.sem
                //     )
                // );

                // const existingStudents = fieldsToInsert.filter((student) =>
                //   result.some(
                //     (existingStu) =>
                //       student.stu_no === existingStu.stu_no &&
                //       student.study_yr === existingStu.study_yr &&
                //       student.sem === existingStu.sem
                //   )
                // );

                // Filter out the new students from the already existing ones
                const { newStudents, existingStudents } = fieldsToInsert.reduce(
                  (acc, student) => {
                    const isExisting = result.some(
                      (existingStu) =>
                        student.stu_no === existingStu.stu_no &&
                        student.study_yr === existingStu.study_yr &&
                        student.sem === existingStu.sem
                    );

                    if (isExisting) {
                      acc.existingStudents.push(student);
                    } else {
                      acc.newStudents.push(student);
                    }

                    return acc;
                  },
                  { newStudents: [], existingStudents: [] }
                );

                // Insert the new students first
                // console.log("new students", newStudents)
                if (newStudents.length > 0) {
                  await database("student_paid_fess").insert(newStudents);
                }

                // After, go for the existing ones
                // const updatePromises = existingStudents.map(
                //   async (existingRow) => {
                //     return await database("student_paid_fess")
                //       .where({
                //         stu_no: existingRow.stu_no,
                //         study_yr: existingRow.study_yr,
                //         sem: existingRow.sem,
                //       })
                //       .update(existingRow);
                //   }
                // );

                // const updatePromises = existingStudents.map(
                //   async (existingRow) => {
                //     console.log("Working on this", existingRow);
                //     return database.transaction(async (trx) => {
                //       await trx("student_paid_fess")
                //         .where({
                //           stu_no: existingRow.stu_no,
                //           study_yr: existingRow.study_yr,
                //           sem: existingRow.sem,
                //         })
                //         .update(existingRow);
                //     });
                //   }
                // );

                // Promise.all(updatePromises)
                //   .then(() => {
                //     res.status(200).send({
                //       success: true,
                //       message: "Updated the fields Successfully",
                //     });
                //   })
                //   .catch((err) => {
                //     res.status(500).send({
                //       success: false,
                //       message: "An error occurred during the updates",
                //       error: err.message,
                //     });
                //   });

                const updatePromises = [];

                for (const existingRow of existingStudents) {
                  updatePromises.push(
                    database.transaction(async (trx) => {
                      await trx("student_paid_fess")
                        .where({
                          stu_no: existingRow.stu_no,
                          study_yr: existingRow.study_yr,
                          sem: existingRow.sem,
                        })
                        .update(existingRow);
                    })
                  );
                }

                Promise.all(updatePromises)
                  .then(() => {
                    res.status(200).send({
                      success: true,
                      message: "Updated the fields successfully",
                    });
                  })
                  .catch((err) => {
                    res.status(500).send({
                      success: false,
                      message: "An error occurred during the updates",
                      error: err.message,
                    });
                  });
              }
            });
        } catch (error) {
          console.log("error", error);
          res.send({
            success: false,
            message:
              "The files sent are too many, kindly remove some files and try again",
            error: error.message,
          });
        }

        // Promise.all([...insert2, ...inserts])
        //   .then(() => {
        //     // Send the response when the inserts are done
        //     database("uploaded_excel_forms_fees")
        //       .insert({
        //         file_name: xlsFile[0].name,
        //         upload_date: new Date(),
        //       })
        //       .then((result) => {
        //         res.send({
        //           success: true,
        //           message: "Excel sheets uploaded successfully",
        //         });
        //       });
        //   })
        //   .catch((err) => {
        //     console.error(err);
        //     // res.send(`Error ${err}`);
        //     res.send({
        //       success: false,
        //       message: `Theres a problem with the sent files: ${err}`,
        //     });
        //   });
        // res.send({ data: modifiedArray });
      });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).send({ "error processing request": error });
  }
});

app.get("/api/students", async (req, res) => {
  let year;
  let sem;
  let arr = [];

  const allStudents = await database
    .select("stdno", "progcode", "study_yr", "current_sem")
    .limit(10)
    .offset(5)
    .from("students_biodata");

  const x = allStudents.map(async (stu) => {
    year = stu.study_yr;
    sem = stu.current_sem;
    const payments = await database
      .select("*")
      .from("student_paid_fess")
      .where({
        stu_no: stu.stdno,
      });

    payments.sort((a, b) => {
      // Sort by 'study_yr' first
      if (a.study_yr < b.study_yr) {
        return -1;
      }
      if (a.study_yr > b.study_yr) {
        return 1;
      }

      // If 'study_yr' is the same, sort by 'sem'
      if (a.sem < b.sem) {
        return -1;
      }
      if (a.sem > b.sem) {
        return 1;
      }

      // If both 'study_yr' and 'sem' are equal, maintain the original order
      return 0;
    });

    if (payments.length > 0) {
      year = payments[payments.length - 1].study_yr;
      sem = payments[payments.length - 1].sem;
    }

    arr.push({ ...stu, year, sem });
  });

  Promise.all(x)
    .then(() => {
      res.send({
        allStudents: arr,
      });
    })
    .catch((err) => {
      res.send({
        error: "Error" + err,
      });
    });
});

app.post("/api/save_enrolled_modules", async (req, res) => {
  const { stdno, current_sem, study_yr, modules } = req.body;
  // console.log("received this", req.body);
  const existingCategory = await database
    .select("*")
    .from("student_enrollment_categories")
    .where({
      stdno,
      study_yr,
      sem: current_sem,
    });

  if (existingCategory[0]) {
    console.log("already have the modules", stdno);
    return res.send({
      success: true,
      message: "already have the modules",
    });
  }

  const newCategory = await database("student_enrollment_categories").insert({
    stdno,
    study_yr,
    sem: current_sem,
  });

  if (modules[0]) {
    const fieldsToInsert = modules.map((field, index) => {
      return {
        cat_id: newCategory[0],
        module_code: field.module_code,
        module_title: field.module_title,
        module_level: field.module_level,
        credit_units: field.credit_units,
        module_year: field.module_year,
        module_sem: field.module_sem,
      };
    });
    await database("student_enrolled_modules").insert(fieldsToInsert);
    console.log("new group inserted", stdno);
    res.send({
      success: true,
      message: "modules saved successfully",
    });
  } else {
    console.log("no modules were sent");
    res.send({
      success: false,
      message: "no modules were sent",
    });
  }
});

app.listen(port, baseIp, () => console.log(`App is running on port ${port}`));
