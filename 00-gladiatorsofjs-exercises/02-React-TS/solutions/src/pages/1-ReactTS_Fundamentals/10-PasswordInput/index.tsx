import { PasswordInput } from "./components/PasswordInput"

const password = "Example"
const onSuccess = () => alert("success");

export const PasswordInputVis = () => {
  return <PasswordInput password={password} onSuccess={onSuccess} />
}