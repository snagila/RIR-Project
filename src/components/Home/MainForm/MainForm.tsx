import { Button } from "@/components/ui/button"
import { Field, FieldGroup } from "@/components/ui/field"
import PatientDetails from "./PatientDetails/PatientDetails"
import { FormProvider, useForm } from "react-hook-form"
import InterpretorCheckbox from "./PatientDetails/InterpretorCheckbox"

interface patientFormData {
  firstName: string
  lastName: string
  dobDD: number
  dobMM: number
  dobYY: number
  gender: string
  otherGender: string
  interpreterRequired: boolean
  interpreterLanguage: string
}

export function MainForm() {
  const methods = useForm<patientFormData>({
    defaultValues: {
      firstName: "Sachin",
      lastName: "Doe",
      dobDD: 1,
      dobMM: 1,
      dobYY: 2000,
      gender: "male",
      otherGender: "Genderqueer",
      interpreterRequired: false,
      interpreterLanguage: "",
    },
  })

  const { control, watch } = methods

  const onSubmit = (data: patientFormData) => {
    console.log("Final Form Data:", data)
    // Send data to backend
  }
  return (
    <>
      <div className="mx-auto mt-10 flex min-h-screen w-[90%] flex-col rounded-md border-2 border-muted-foreground lg:w-[80%]">
        <h2 className="mb-10 p-10 text-center text-2xl font-bold">
          Refer a patient to Residential-in-Reach
        </h2>

        <div className="px-3 md:px-10">
          <div className="mb-8 text-xl font-bold">
            Information about the patient
          </div>

          {/* form starts here */}
          <div>
            <FormProvider {...methods}>
              <form
                className="w-full"
                onSubmit={methods.handleSubmit(onSubmit)}
              >
                <FieldGroup>
                  {/* this is the first form line */}
                  <PatientDetails />

                  {/*Interpreter Checkbox */}
                  <InterpretorCheckbox />

                  <Field orientation="horizontal">
                    <Button type="submit">Submit</Button>
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  </Field>
                </FieldGroup>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </>
  )
}
