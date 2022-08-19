import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education & Certifications</h5>

          <div className="" style={{borderBottom: "solid 1px grey", marginBottom: "20px"}}>
            <h5 className="my-2 text-xl font-bold">
              SUN Certified Programmer
            </h5>
            <p className="font-semibold">SUN Micro Systems (2010-2012)</p>
          </div>

          <div className="" style={{borderBottom: "solid 1px grey", marginBottom: "20px"}}>
            <h5 className="my-2 text-xl font-bold">
              Certified Wireless Security Professional, CWSP (2010 - 2012)
            </h5>
            <p className="font-semibold">CWNP (2010-2012)</p>
          </div>

          <div className="" style={{borderBottom: "solid 1px grey", marginBottom: "20px"}}>
            <h5 className="my-2 text-xl font-bold">
              Certified Wireless Network Administrator, CWNA (2010 - 2012)
            </h5>
            <p className="font-semibold">CWNP (2010-2012)</p>
          </div>

          <div className="" style={{borderBottom: "solid 1px grey", marginBottom: "20px"}}>
            <h5 className="my-2 text-xl font-bold">
              Cisco Certified Network Associate Industrial, CCNA (2010 - 2012)
            </h5>
            <p className="font-semibold">CISCO (2010-2012)</p>
          </div>
          
          <div className="" style={{borderBottom: "solid 1px grey", marginBottom: "20px"}}>
            <h5 className="my-2 text-xl font-bold">
              Associate Degree in Computing
            </h5>
            <p className="font-semibold">Informatics Academy Singapore (2006-2008)</p>
          </div>

        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="" style={{borderBottom: "solid 1px grey", marginBottom: "20px"}}>
            <h5 className="my-2 text-xl font-bold">Information Technology Manager</h5>
            <p className="font-semibold">Rockford International Information Technology LLC, Dubai - UAE</p>
            <p className="my-3">I was responsible for leading the team. My duties included working on both the front-end and back-end of web applications, as well as ensuring that the applications were compatible with multiple browsers and devices. I also provided support to users when needed.</p>
          </div>

          <div className="" style={{borderBottom: "solid 1px grey", marginBottom: "20px"}}>
            <h5 className="my-2 text-xl font-bold">Fullstack Software Developer</h5>
            <p className="font-semibold">1 BMT, Abuja - Nigeria</p>
            <p className="my-3">Lead developer responsible for server-side web application logic and integration with the front-end. Built and maintain Restful API endpoints. Developed automated unit and integration tests. Implemented a continuous integration and delivery pipeline. Building and maintaining various websites. I was responsible for creating and implementing the front-end code, ensuring that the websites met all the requirements of the company.</p>
          </div>

          <div className="" style={{borderBottom: "solid 1px grey", marginBottom: "20px"}}>
            <h5 className="my-2 text-xl font-bold">Information Technology Specialist</h5>
            <p className="font-semibold">African Women Entrepreneurship Programme (AWEP), Lagos - Nigeria</p>
            <p className="my-3">A group of over thirty thousand business women worldwide. I was in charge of developing and organizing their IT and systems affairs. I built and managed their systems and events which includes websites, applications, social media accounts and other IT related services.</p>
          </div>

          <div className="" style={{borderBottom: "solid 1px grey", marginBottom: "20px"}}>
            <h5 className="my-2 text-xl font-bold">Project Manager (Contract) </h5>
            <p className="font-semibold">Nayas Residential Property Care Services Co. Dubai - UAE</p>
            <p className="my-3">I'm responsible for managing and implementing all the company's property and related systems.</p>
          </div>

        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
