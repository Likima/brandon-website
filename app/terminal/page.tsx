import { Title } from "@/components/title";
import { AsciiArt } from "@/components/asciiart";

export default function Home() {
  return (
    <div className="mx-3">
      <div className="flex">
        <Title dir = ''/>
        <div>Hello! Welcome to my website!</div>
      </div>
      <div className="flex">
        <Title dir = ''/>
        <div>ls</div>
      </div>
      <div className="flex mx-4">
        <div className="text-blue-400">Projects&nbsp;&nbsp;</div>
        <div className="text-blue-400">Hobbies&nbsp;&nbsp;</div>
        <a href="socials.txt" className="text-green-400">socials.txt&nbsp;&nbsp;</a>
        <a href="info.txt" className="text-green-400">info.txt</a>
      </div>
      <div className="flex">
        <Title dir = ''/>
        <div>cat info.txt</div>
      </div>
      <div>
        <AsciiArt />
        My name is Brandon and I go to Simon Fraser University.<br></br>
        I am a Computer Science student and I love to code! I am an aspiring software engineer and I can code in 
        Python, C, C++, Javascript/Typescript.<br></br>
      </div>
      <div className="flex">
        <Title dir = ''/>
        <div>cat socials.txt</div>
      </div>
      <div className="flex mx-4">
        <a href="https://www.instagram.com/brandon_tang_/" className="underline text-blue-300">Instagram</a>
        <div>&nbsp;&nbsp;</div>
        <a href="https://www.discord.com" className="underline text-blue-300">Discord</a>
        <div>&nbsp;&nbsp;</div>
        <a href="https://www.github.com/Likima" className="underline text-blue-300">GitHub</a>
      </div>
      <div className="flex">
        <Title dir = ''/>
        <div>cd Projects</div>
      </div>
      <div className="flex">
        <Title dir = '/Projects'/>
        <div>ls</div>
      </div>
      <div className="flex mx-4">
        <a href="https://www.github.com/Likima/TCPFlow_Clone" className="underline text-blue-300">Packet Sniffer</a>
        <div>&nbsp;&nbsp;</div>
        <a href="https://www.github.com/Likima/ChessBot" className="underline text-blue-300">Chess Bot</a>
        <div>&nbsp;&nbsp;</div>
        <a href="https://www.github.com/Likima/ConnectFourBot" className="underline text-blue-300">Connect 4 Bot</a>
        <div>&nbsp;&nbsp;</div>
        <a href="https://www.github.com/Likima/Monster_Tracker" className="underline text-blue-300">MonsterTracker</a>        
        <div>&nbsp;&nbsp;</div>
        <a href="https://www.github.com/Likima" className="underline text-blue-300">+ more!</a>
      </div>
      <div className="flex">
        <Title dir = '/Projects'/>
        <div>cd ../Hobbies</div>
      </div>
      <div className="flex">
        <Title dir = '/Hobbies'/>
        <div>ls</div>
      </div>
      <div className="flex mx-4">
        <div className = "text-green-400">hobbies.txt&nbsp;&nbsp;</div>
        <a href="https://www.chess.com/member/Smeese12345" className="underline text-blue-300">Chess</a>
        <div>&nbsp;&nbsp;</div>
        <a href="https://www.geoguessr.com/user/62e8b16d30325f6815a8b3a6" className="underline text-blue-300">GeoGuessr</a>
      </div>
      <div className="flex">
        <Title dir = '/Hobbies'/>
        <div>cat hobbies.txt</div>
      </div>
      <div className= "mx-4">
        I like to play chess, play video games, and code! I love music, I play
        the guitar, piano, and cello. As well I love to play Geoguessr! Feel free to friend me!&nbsp;
      </div>
    </div>
  );
}
