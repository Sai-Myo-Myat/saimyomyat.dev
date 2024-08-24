"use client";

const ProfileSection = () => {
  return (
    <section id="profile" className="flex flex-col py-20">
      <h1>About me</h1>
      <div className="flex flex-wrap gap-4 justify-between py-4">
        <div className="bg-black sm:flex-1 w-full h-[40vh]"></div>
        <p className="flex-1">
          I’m Sai Myo Myat, I thrive in creating seamless web experiences using
          Next.js and mobile applications with React Native. With a focus on
          performance and reliability, I’m passionate about backend development
          using GOLANG. Driven by a love for technology, I’m constantly seeking
          new challenges and learning opportunities to elevate my skills and
          enhance development processes. Let’s connect and innovate together!
        </p>
      </div>
    </section>
  );
};

export default ProfileSection;
