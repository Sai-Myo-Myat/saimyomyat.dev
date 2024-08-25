"use client";

const ProfileSection = () => {
  return (
    <section id="profile" className="flex flex-col py-20">
      <div className="flex flex-wrap gap-4 justify-between py-4">
        <div className="bg-black sm:flex-1 w-full h-[40vh]"></div>
        <div className="flex-1 flex flex-col gap-4 border-2 border-black p-4">
          <h2>About me</h2>
          <h1 className="text-primary">I’m Sai Myo Myat, </h1>
          <p>
            I am thrive in creating seamless web experiences using Next.js and
            mobile applications with React Native. With a focus on performance
            and reliability, I’m passionate about backend development using
            GOLANG. Driven by a love for technology, I’m constantly seeking new
            challenges and learning opportunities to elevate my skills and
            enhance development processes.{" "}
            <a href="#contacts" className="text-primary">
              Let’s connect
            </a>{" "}
            and innovate together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
