import { useRouter } from "next/router";

export default function Post({ title, content }) {
  const router = useRouter();
  const { person_name } = router.query;

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>Person : {person_name}</p>
    </div>
  );
}