import { FormWrapper } from "./FormWrapper"

type AddressData = {
  street: string
  province: string
  city: string
  postalCode: string
}

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
}

const SOUTH_AFRICAN_PROVINCES = [
  "Eastern Cape",
  "Free State",
  "Gauteng",
  "KwaZulu-Natal",
  "Limpopo",
  "Mpumalanga",
  "North West",
  "Northern Cape",
  "Western Cape",
]

export function AddressForm({
  street,
  province,
  city,
  postalCode,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Address">
      <label htmlFor="street">Street</label>
      <input
        id="street"
        autoFocus
        required
        type="text"
        value={street}
        onChange={e => updateFields({ street: e.target.value })}
      />
      <label htmlFor="province">Province</label>
      <select
        id="province"
        required
        value={province}
        onChange={e => updateFields({ province: e.target.value })}
      >
        <option value="">Select a province</option>
        {SOUTH_AFRICAN_PROVINCES.map(southAfricanProvince => (
          <option key={southAfricanProvince} value={southAfricanProvince}>
            {southAfricanProvince}
          </option>
        ))}
      </select>
      <label htmlFor="city">City</label>
      <input
        id="city"
        required
        type="text"
        value={city}
        onChange={e => updateFields({ city: e.target.value })}
      />
      <label htmlFor="postal-code">Postal Code</label>
      <input
        id="postal-code"
        required
        type="text"
        inputMode="numeric"
        maxLength={4}
        pattern="[0-9]{4}"
        title="Enter a 4-digit South African postal code"
        value={postalCode}
        onChange={e => updateFields({ postalCode: e.target.value })}
      />
    </FormWrapper>
  )
}