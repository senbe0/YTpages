import { useRouter } from "next/router";

export default function Post({ title, content }) {
  const router = useRouter();
  const { group_name } = router.query;

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>Post ID: {group_name}</p>
    </div>
  );
}
