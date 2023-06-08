import AOS from 'aos'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Profile_pic from '../../public/image/Profile_pic.jpg'
import MyButton from '@/components/MyButton'
import Typewriter from 'typewriter-effect'
import C from '../../public/svgs/C.svg'
import Next from '../../public/svgs/Next.svg'
import Android_studio from '../../public/svgs/Android_studio.svg'
import java from '../../public/svgs/java.svg'
import Html from '../../public/svgs/Html.svg'
import react_logo from '../../public/svgs/react_logo.svg'
import Skill_card from '@/components/Skill_card'
import best_project from '../../public/image/best_project.png'
import Hackathon from '../../public/image/Hackathon.jpg'
import Technical_event from '../../public/image/Technical_event.jpg'
import tailwind from '../../public/svgs/tailwind.svg'
import project_day from '../../public/image/project_day.jpg'
import Footer from '@/components/Footer'
import Coming_soon from '@/components/Coming_soon'
import Techno from '../../public/image/Technocolabs.png'
import Spotify from '../../public/image/Spotify.svg'
import android_logo from '../../public/image/android_app.svg'
import seed_it from '../../public/image/seed_it.png'
import resumint from '../../public/image/Resumint.png'
const Home = () => {
  
  const Skill =({href})=>{
    return(
      <Image alt="Test" src={href} width={100} className='hover:scale-110 rounded-full object-cover w-[100px] h-[100px] transition'/>
    )
} 

  return (
    <main className='mx-auto'>
      <Navbar/>
      <div className='items-center flex-row'>
        <div className='md:flex xl:flex'>
        <div className='conyyainer1 w-1/2 sm:w-full h-screen flex justify-center'>
          <div className='card flex flex-col justify-start items-center  bg-slate-500/20 mt-14 p-6 rounded-xl w-[350px] h-[400px]'>
          <Image  src={Profile_pic} alt='Profile pic' className='rounded-full object-cover w-[200px] h-[200px] hover:scale-105 transition'/>
          <span className='pt-8 font-semibold text-[20px]'>
            Nikhil Sharma hello
          </span>
          <span className='font-normal text-[12px] mt-2'>
            Software Developer | Organizer | Web Developer 
          </span>
          <div className='mt-6'>
          <MyButton href="/test" buttonText={"Connect"} style="bg-[#4fb0c6] px-6 py-2 rounded-md hover:bg-[#006985] text-black hover:text-white shadow-md shadow-black hover:shadow-none transition"/>
          </div>
          </div>
        </div>
        <div className='flex sm:w-full w-1/2 h-screen'>
          <div className='container2'>
          <p className='text-5xl font-bold mt-20'>
          I am
          {' '}
          {/* <p className='text-[#4fb0c6]'>
          <Typewriter
            options={{
              strings: ['Web Developer', 'Organizer' , 'Android Developer' , "Designer" ],
              autoStart: true,
              loop: true,
            }}
            /> 
            </p> */}
            </p>
            <p className='mt-6 text-[16px] font-normal p-6'>
              Hey !! I'm Nikhil Sharma, a third-year B.Tech student at SRM University in Chennai. My passion for technology has driven me to develop skills in both Android and web development, creating user-friendly applications and websites. I have strong organizational skills, leading and managing various events. My outstanding academic performance reflects my hard work and dedication to learning. I'm eager to continue growing my skills and achieving my goals in the future.
            </p>
            <div className='skills card mt-12 '>
              <p className='font-semibold text-xl mb-12'>Skill Badge</p>
              <div className='grid grid-cols-4 gap-y-12'>
                <Skill href={C} alt='Profile pic' className=""/>
                <Skill href={Next } alt='Profile pic' className=""/>
                <Skill href={Android_studio} alt='Profile pic' className=""/>
                <Skill href={tailwind} alt='Profile pic' className=""/>
                <Skill href={Html} alt='Profile pic' className=""/>
                <Skill href={java} alt='Profile pic' className=""/>
                <Skill href={react_logo} alt='Profile pic' className=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className='flex flex-col h-screen'>
        <div className='header'>
          <p className='p-6 text-6xl font-bold'>ACHIVEMENTS</p>
        </div>
        <div className='flex justify-center mx-40 rounded-md' data-aos="fade-up">
            <div data-aos="fade-right" className='grid gap-8  grid-cols-3 p-6'>
            <Skill_card image_link={best_project} card_title={"Best Project award"} />
            <Skill_card image_link={Hackathon} card_title={"Hackathon"} />
            <Skill_card image_link={Technical_event} card_title={"Technical events"} />
            <Skill_card image_link={project_day} card_title={"Project day"} />
            </div>
        </div>
        {/* Internships */}
        <div className='flex flex-col p-6'>
          <div className='p-6 text-6xl font-bold uppercase text-right'>
            Internships
          </div>
          <div className='flex justify-center items-center mt-10 p-6'>
            <div className='grid grid-cols-3 gap-12'>
            <Coming_soon internship_title={"Technocolabs"} image_link={Techno} desc={"As a Data Scientist Intern at Technocolabs, you will have the opportunity to work on real-world projects and gain practical experience in the field of data science."}/>
            <Coming_soon internship_title={"Seed it solution"} image_link={seed_it} desc={"The web developer internship at Seed IT Solution is likely to be a position where an intern works alongside experienced web developers to learn and develop skills related to building and maintaining web applications. Tasks may include coding, testing, and debugging web applications, working with databases, and collaborating with other team members to ensure successful project outcomes."}/>
            </div>
          </div>
        </div>
        {/* GitHub projects */}
        <div className='flex flex-col p-6'>
          <div className='p-6 text-6xl font-bold uppercase'>
            Projects
          </div>
          <div className='flex justify-center items-center mt-10 p-6'>
            <div className='grid grid-cols-3 gap-12'>
            <Coming_soon internship_title={"BMI Fusion"} image_link={android_logo} desc={"An Android app created using Java in Android Studio to calculate BMI is a useful tool for people who want to monitor their health and fitness. The app typically features a simple interface with input fields for height and weight measurements. Once the user inputs their data, the app uses the BMI formula (weight in kilograms divided by height in meters squared) to calculate the BMI score and categorize it into different health categories (underweight, normal, overweight, or obese)."}/>
            <Coming_soon internship_title={"Music web Player"} image_link={Spotify} desc={"A music player created using HTML, CSS, and JS is a simple and efficient way to play and manage music on a website. The player typically consists of a container that holds the music player interface, an audio tag that loads and plays the songs, and a playlist with clickable song titles that play the corresponding audio file"}/>
            <Coming_soon internship_title={"Resumint"} image_link={resumint} desc={"Under Development . . . "}/>
            </div>
          </div>
        </div>
          <Footer/> 
      </div>
    </main>
  )
}

export default Home
