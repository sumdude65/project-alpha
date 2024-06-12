import NewCategory from "../components/HomepageComponents/newCategory";

export default function Home() {
  return (
    <main className='grid md:grid-cols-[1fr_65%_1fr] customWidth100'>
      <div>{/**Reserved for content */}</div>
      <NewCategory />
      <div>{/**Reserved for content */}</div>
    </main>
  );
}
