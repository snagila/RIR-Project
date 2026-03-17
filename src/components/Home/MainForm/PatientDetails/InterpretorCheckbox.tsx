import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Controller, useFormContext } from "react-hook-form"

const InterpretorCheckbox = () => {
  const { control, watch, register } = useFormContext()
  const isChecked = watch("interpreterRequired")
  return (
    <>
      <Controller
        name="interpreterRequired"
        control={control}
        render={({ field }) => (
          <div className="flex items-center gap-3">
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              id="interpreterRequired"
            />
            <Label htmlFor="interpreterRequired">Interpreter Required</Label>
          </div>
        )}
      />
      {isChecked && (
        <Controller
          name="interpreterLanguage"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <>
              <Select value={field.value} onValueChange={field.onChange}>
                <Label htmlFor="interpreter" className="">
                  Select Interpreter Language{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <SelectTrigger id="interpreter" className="w-auto">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="arabic">Arabic</SelectItem>
                  <SelectItem value="chinese">Chinese</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                  <SelectItem value="german">German</SelectItem>
                  <SelectItem value="greek">Greek</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                  <SelectItem value="italian">Italian</SelectItem>
                  <SelectItem value="japanese">Japanese</SelectItem>
                  <SelectItem value="korean">Korean</SelectItem>
                  <SelectItem value="persian">Persian</SelectItem>
                  <SelectItem value="auslan">Auslan</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {field.value === "other" && (
                <Input
                  {...register("otherLanguage", {
                    // required: true,
                    minLength: 1,
                    maxLength: 50,
                  })}
                  id="otherLanguage"
                  type="text"
                  placeholder="Please specify"
                  className="w-auto"
                />
              )}
            </>
          )}
        />
      )}
    </>
  )
}

export default InterpretorCheckbox
