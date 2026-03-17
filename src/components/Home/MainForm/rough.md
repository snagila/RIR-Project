{/_ this is second form line _/}
<div className="grid gap-4 md:grid-cols-2">
{/_ sex _/}
<Field>
<FieldLabel htmlFor="sex">
Sex at birth <span className="text-red-500">_</span>
</FieldLabel>
{/_ <select {...register("gender")}>
<option value="female">female</option>
<option value="male">male</option>
<option value="other">other</option>
</select> \*/}
<Select defaultValue="" {...register("gender")}>
<SelectTrigger id="sex">
<SelectValue />
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
{sex === "other" && (
<Input id="sex-other" type="text" placeholder="Please specify" />
)}
</Field>

        {/* Aboriginal or Torres Strait Islander status */}
        <Field>
          <FieldLabel htmlFor="origin">
            Aboriginal or Torres Strait Islander status{" "}
            <span className="text-red-500">*</span>
          </FieldLabel>
          <Select defaultValue="" {...register("origin")}>
            <SelectTrigger id="origin">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="aboriginal">Aboriginal</SelectItem>
              <SelectItem value="torres-strait-islander">
                Torres Strait Islander
              </SelectItem>
              <SelectItem value="both-aboriginal-and-torres-strait-islander">
                Both Aboriginal and Torres Strait Islander
              </SelectItem>
              <SelectItem value="nor-aboriginal-and-torres-strait-islander">
                Nor Aboriginal and Torres Strait Islander
              </SelectItem>
              <SelectItem value="prefer-not-to-answer">
                Prefer not to answer
              </SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>
