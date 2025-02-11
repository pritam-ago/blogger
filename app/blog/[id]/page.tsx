export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
 
    return (
      <p>blog page dynamic {(await params).id}</p>
    );
  }