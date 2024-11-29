import { BlogSearch } from "@/components/blog-search";
interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  reactions?: number;
  time?: string;
}
export default function Page({ params }: any) {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Abu Sayed killed during quota protest",
      content:
        "content of Abu Sayed killed during quota protest,content of Abu Sayed killed during quota protestcontent of Abu Sayed killed during quota protestcontent of Abu Sayed killed during quota protestcontent of Abu Sayed killed during quota protest",
      image:
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      reactions: 30,
      time: "19:27",
    },
    {
      id: 2,
      title: "Student of Begum Rokeya University, ",
      content:
        "Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,",
      image:
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      time: "19:27",
    },
    {
      id: 3,
      title: "Student of Begum Rokeya University, ",
      content:
        "Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,",
      image:
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      time: "19:27",
    },
    {
      id: 4,
      title: "Student of Begum Rokeya University, ",
      content:
        "Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,",
      image:
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      time: "19:27",
    },
    {
      id: 5,
      title: "Student of Begum Rokeya University, ",
      content:
        "Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,Content of Student of Begum Rokeya University,",
      image:
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      time: "19:27",
    },
  ];
  return (
    <div>
      <BlogSearch blogPosts={blogPosts} />
    </div>
  );
}
