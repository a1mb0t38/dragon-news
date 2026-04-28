import { redirect } from "next/navigation";

const default_catetory_id = "01";

export default async function Home() {
  redirect(`/category/${default_catetory_id}`)

}
