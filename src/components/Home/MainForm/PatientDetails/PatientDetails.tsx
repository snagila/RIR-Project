import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
import { Controller, useFormContext } from "react-hook-form"

export default function PatientDetails() {
  const { register, control } = useFormContext()
  return (
    <>
      {/* 1st line */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* first name */}
        <Field className="basis-4/12 md:mt-7">
          <FieldLabel htmlFor="firstName">
            First Name <span className="text-red-500">*</span>
          </FieldLabel>
          <Input
            {...register("firstName", {
              // required: true,
              minLength: 1,
              maxLength: 50,
            })}
            id="firstName"
            type="text"
            placeholder="John"
          />
        </Field>
        {/* last name */}
        <Field className="basis-4/12 md:mt-7">
          <FieldLabel htmlFor="lastName">
            Last Name <span className="text-red-500">*</span>
          </FieldLabel>
          <Input
            id="lastName"
            type="text"
            placeholder="Doe"
            {...register("lastName", {
              // required: true,
              minLength: 1,
              maxLength: 50,
            })}
          />
        </Field>
        {/* DOB */}
        <div className="flex basis-4/12 flex-col gap-2">
          <Field>
            <FieldLabel>
              Date of Birth <span className="text-red-500">*</span>
            </FieldLabel>
          </Field>
          <div className="flex gap-2">
            {/* DD */}
            <Field className="basis-1/4">
              <FieldLabel htmlFor="dobDD">Day</FieldLabel>
              <Input
                id="dobDD"
                type="text"
                placeholder="01"
                {...register("dobDD", {
                  // required: true,
                  minLength: 1,
                  maxLength: 2,
                })}
              />
            </Field>
            {/* MM */}
            <Field className="basis-1/4">
              <FieldLabel htmlFor="dobMM">Month</FieldLabel>
              <Input
                id="dobMM"
                type="text"
                placeholder="01"
                {...register("dobMM", {
                  // required: true,
                  minLength: 1,
                  maxLength: 2,
                })}
              />
            </Field>
            {/* yy */}
            <Field className="basis-2/4">
              <FieldLabel htmlFor="dobYY">Year</FieldLabel>
              <Input
                id="dobYY"
                type="text"
                placeholder="2000"
                {...register("dobYY", {
                  // required: true,
                  minLength: 4,
                  maxLength: 4,
                })}
              />
            </Field>
          </div>
        </div>
      </div>

      {/* Second Line */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* {/_ sex _/} */}
        <Field>
          <FieldLabel htmlFor="gender">
            Sex at birth <span className="text-red-500">*</span>
          </FieldLabel>

          <Controller
            control={control}
            name="gender"
            defaultValue=""
            render={({ field }) => (
              <>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="indeterminate">Indeterminate</SelectItem>
                    <SelectItem value="other">
                      Different Term (Please Specify)
                    </SelectItem>
                    <SelectItem value="prefer-not-to-answer">
                      Prefer Not to answer
                    </SelectItem>
                  </SelectContent>
                </Select>

                {/* Conditional input */}
                {field.value === "other" && (
                  <Input
                    {...register("otherGender", {
                      // required: true,
                      minLength: 1,
                      maxLength: 50,
                    })}
                    id="gender-other"
                    type="text"
                    placeholder="Please specify"
                    className="mt-2 w-full"
                  />
                )}
              </>
            )}
          />
        </Field>
      </div>
    </>
  )
}
