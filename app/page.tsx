import { Title } from "@/components/title";
import { AsciiArt } from "@/components/asciiart";

export default function Home() {
  return (
    <div className="mx-3">
      <div className="flex">
        <Title />
        <div>Hello! Welcome to my website!</div>
      </div>
      <div className="flex">
        <Title />
        <div>ls</div>
      </div>
      <div className="flex mx-4">
        <div className="text-blue-400">Projects&nbsp;&nbsp;</div>
        <div className="text-blue-400">Hobbies&nbsp;&nbsp;</div>
        <a href="socials.txt" className="text-green-400">socials.txt&nbsp;&nbsp;</a>
        <a href="info.txt" className="text-green-400">info.txt</a>
      </div>
      <div className="flex">
        <Title />
        <div>cat info.txt</div>
      </div>
      <div>
        <AsciiArt />
        My name is Brandon and I go to Simon Fraser University.<br></br>
        [insert other information!]
      </div>
      <div className="flex">
        <Title />
        <div>cat socials.txt</div>
      </div>
      <div className="flex mx-4">
        <a href="https://www.instagram.com/brandon_tang_/" className="underline text-blue-300">Instagram</a>
        <div>&nbsp;&nbsp;</div>
        <a href="https://www.discord.com" className="underline text-blue-300">Discord</a>
        <div>&nbsp;&nbsp;</div>
        <a href="https://www.github.com/Likima" className="underline text-blue-300">GitHub</a>
      </div>
    </div>
    //test commit
  );
}
