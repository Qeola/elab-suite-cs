"use client";

import { useState } from "react";
import { Modal } from "flowbite-react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { HiCloudUpload } from "react-icons/hi";
import AuthButton from "../resuable/button/AuthButton";
import FunctionButton from "../resuable/button/FunctionButton";

interface FileModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  onConfirm: () => void;
}

interface FormValues {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  file: any;
}

const FileUploadModal: React.FC<FileModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
}) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const validationSchema = Yup.object().shape({
    file: Yup.mixed()
      .required("Please upload a file.")
      .test(
        "fileType",
        "Only CSV, XLS, or XLSX files are allowed.",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (value: any) => {
          return (
            value &&
            [
              "text/csv",
              "application/vnd.ms-excel",
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            ].includes(value.type)
          );
        },
      ),
  });

  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>,
  ) => {
    console.log("Uploading:", values.file);
    onConfirm();
    onClose();
    resetForm();
  };

  return (
    <Modal show={isOpen} onClose={onClose} size="lg">
      <Modal.Header className="pb-2">{title}</Modal.Header>
      <Modal.Body>
        <p className="text-gray-600 text-sm">
          Upload an Excel or .csv file to import your {title.toLowerCase()}{" "}
          data.
        </p>

        <Formik
          initialValues={{ file: null }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              {/* Upload Box */}
              <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center mt-4">
                <HiCloudUpload className="text-primary text-4xl mb-2" />
                <p className="text-gray-500 text-sm">
                  Drag and drop or{" "}
                  <span className="text-blue-600 cursor-pointer">browse</span>{" "}
                  file
                </p>

                <Field name="file">
                  {() => (
                    <>
                      <input
                        type="file"
                        accept=".csv,.xls,.xlsx"
                        className="hidden"
                        id="fileUpload"
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onChange={(event: any) => {
                          const file = event.target.files[0];
                          setFieldValue("file", file);
                          setFileName(file ? file.name : null);
                        }}
                      />
                      <label
                        htmlFor="fileUpload"
                        className="cursor-pointer w-full text-center"
                      >
                        {fileName ? (
                          <p className="mt-3 text-gray-700 font-medium text-sm">
                            {fileName}
                          </p>
                        ) : (
                          <p className="mt-3 text-gray-400 text-sm">
                            No file selected
                          </p>
                        )}
                      </label>
                    </>
                  )}
                </Field>

                <ErrorMessage
                  name="file"
                  component="div"
                  className="text-red-500 text-sm mt-2"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end ">
                <div className="flex justify-end mt-4 space-x-2">
                  <FunctionButton click={onClose} variant="outlined">
                    Cancel
                  </FunctionButton>
                  <AuthButton>Upload</AuthButton>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default FileUploadModal;
