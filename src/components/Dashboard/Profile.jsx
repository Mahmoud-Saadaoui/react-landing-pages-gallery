import { FaStar } from "react-icons/fa6";
import { images } from "./images";
import { profileData } from "./data";
import Toggle from "./Toggle";
import PageTitle from "./PageTitle";

const Profile = () => {
  const { name, level, levelWidth, rating, ratingText, infoBoxes, skills, activities } = profileData;

  return (
    <>
      <PageTitle>Profile</PageTitle>
      <div className="m-[20px] max-md:mx-[10px]">
        <div className="flex items-center rounded-[10px] bg-white max-md:flex-col">
          <div className="w-[300px] p-[20px] text-center md:border-r md:border-[#eee]">
            <img className="mb-[10px] h-[120px] w-[120px] rounded-full" src={images.avatar} alt="" />
            <h3 className="mt-0 mb-0 text-[1.17em] font-bold">{name}</h3>
            <p className="mt-[10px] mb-0 text-[#888]">{level}</p>
            <div className="relative mx-auto my-0 h-[6px] w-[70%] overflow-hidden rounded-[6px] bg-[#eee]">
              <span className="absolute left-0 top-0 h-full rounded-[6px] bg-[#0075ff]" style={{ width: levelWidth }} />
            </div>
            <div className="my-[10px]">
              {rating.map((r) => (
                <FaStar aria-hidden key={r} className="inline text-[13px] text-[#f59e0b]" />
              ))}
            </div>
            <p className="mt-0 mb-0 text-[13px] text-[#888]">{ratingText}</p>
          </div>
          <div className="w-full max-md:text-center">
            {infoBoxes.map((box) => (
              <div
                key={box.title}
                className="flex flex-wrap items-center p-[20px] transition-colors duration-300 hover:bg-[#f9f9f9] [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[#eee]"
              >
                <h4 className="mt-0 mb-0 w-full text-[15px] font-normal text-[#888]">{box.title}</h4>
                {box.rows.map(([label, value]) => (
                  <div key={label} className="min-w-[250px] pt-[10px] text-[14px]">
                    <span className="text-[#888]">{label}</span> {value}
                  </div>
                ))}
                <div className="min-w-[250px] pt-[10px] text-[14px]">
                  <Toggle defaultChecked={box.toggle.checked} small />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[20px] flex gap-[20px] max-md:flex-col">
          <div className="flex-grow rounded-[10px] bg-white p-[20px]">
            <h2 className="mt-0 mb-[10px] text-[1.5em] font-bold">My Skills</h2>
            <p className="mt-0 mb-[20px] text-[15px] text-[#888]">Complete Skills List</p>
            <ul className="m-0 list-none p-0 max-md:text-center">
              {skills.map((row) => (
                <li key={row.join()} className="py-[15px] [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[#eee]">
                  {row.map((skill) => (
                    <span
                      key={skill}
                      className="mr-[5px] inline-flex rounded-[6px] bg-[#eee] px-[10px] py-[4px] text-[14px] [&:not(:last-child)]:mr-[5px]"
                    >
                      {skill}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-grow-[2] rounded-[10px] bg-white p-[20px]">
            <h2 className="mt-0 mb-[10px] text-[1.5em] font-bold">Latest Activities</h2>
            <p className="mt-0 mb-[20px] text-[15px] text-[#888]">Latest Activities Done By The User</p>
            {activities.map((a) => (
              <div
                key={a.title}
                className="flex items-center max-md:flex-col [&:not(:last-of-type)]:mb-[20px] [&:not(:last-of-type)]:border-b [&:not(:last-of-type)]:border-[#eee] [&:not(:last-of-type)]:pb-[20px]"
              >
                <img className="mr-[10px] h-[64px] w-[64px] max-md:mb-[15px] max-md:mr-0" src={a.img} alt="" />
                <div className="max-md:text-center">
                  <span className="mb-[10px] block">{a.title}</span>
                  <span className="text-[#888]">{a.desc}</span>
                </div>
                <div className="ml-auto text-right max-md:mt-[15px] max-md:ml-0 max-md:text-center">
                  <span className="mb-[10px] block">{a.time}</span>
                  <span className="text-[#888]">{a.when}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;