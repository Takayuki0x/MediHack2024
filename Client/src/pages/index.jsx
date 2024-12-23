/**
 * IndexPage component renders the main landing page for the MediLearn application.
 * It includes sections for interactive courses, gamified learning, flexible learning,
 * certification, and links to the GitHub repository and other technologies used.
 *
 * @component
 * @example
 * return (
 *   <IndexPage />
 * )
 *
 * @returns {JSX.Element} The rendered landing page component.
*/
import DefaultLayout from "../layouts/default";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/react";
import { motion } from "motion/react"
import { ViteLogo, ReactLogo, TailwindCSSLogo, NodeJSLogo, ExpressJSLogo, JWTLogo, GithubIcon, NextUILogo } from "../components/icons";

export default function IndexPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  }

  return (
    <DefaultLayout>
      <div>
        <section className="mt-4 md:mt-4">
          <img src="/images/medilearnlogo.png" alt="MediLearn Logo" className="m-auto w-74 h-32" />
          <p className="text-2xl font-light m-auto text-center mt-2">
            Micro-Learning For Medical And Health Professionals
          </p>
          <div className="mt-6 md:mt-10">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5 }}
                className="col-span-1 md:col-span-2"
              >
                <Card className="h-full" radius="sm">
                  <CardBody>
                    <h2 className="text-xl font-bold">Interactive Courses</h2>
                    <p>Engage with interactive courses designed to enhance your medical knowledge and skills.</p>
                  </CardBody>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full" radius="sm">
                  <CardBody>
                    <h2 className="text-xl font-bold">Gamified Learning</h2>
                    <p>Learn and earn points, badges, and rewards to stay motivated and engaged.</p>
                  </CardBody>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full" radius="sm">
                  <CardBody>
                    <h2 className="text-xl font-bold">Flexible Learning</h2>
                    <p>Access courses anytime, anywhere, and learn at your own pace.</p>
                  </CardBody>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5 }}
                className="col-span-1 md:col-span-2"
              >
                <Card className="h-full" radius="sm">
                  <CardBody>
                    <h2 className="text-xl font-bold">Certification</h2>
                    <p>Earn certificates to showcase your achievements and advance your career.</p>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="mt-6 md:mt-6">
          <div className="flex justify-center items-center gap-2">
            <motion.a
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              href="https://github.com/Takayuki0x/MediHack2024"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Button color="danger" startContent={<GithubIcon />} variant="bordered">
                Check Out Github Repo
              </Button>
            </motion.a>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Button color="danger" onPress={handleGetStarted}>
                Get Started
              </Button>
            </motion.div>
          </div>
        </section>
        <section className="mt-6 md:mt-6">
          <h2 className="text-2xl font-light m-auto text-center">Created To Participate In <a href="https://minimedi.devpost.com"><span className="font-medium">MiniMedi 2024</span></a> Using:</h2>
          <div className="mt-4 md:mt-6 flex justify-center items-center gap-2">
            <motion.a
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              href="https://vitejs.dev/"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardBody>
                  <ViteLogo className="w-12 h-12 m-auto" />
                </CardBody>
              </Card>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              href="https://reactjs.org/"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardBody>
                  <ReactLogo className="w-12 h-12 m-auto" />
                </CardBody>
              </Card>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              href="https://tailwindcss.com/"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardBody>
                  <TailwindCSSLogo className="w-12 h-12 m-auto" />
                </CardBody>
              </Card>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              href="https://nodejs.org/"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardBody>
                  <NodeJSLogo className="w-12 h-12 m-auto" />
                </CardBody>
              </Card>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              href="https://expressjs.com/"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardBody>
                  <ExpressJSLogo className="w-12 h-12 m-auto" />
                </CardBody>
              </Card>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              href="https://jwt.io/"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardBody>
                  <JWTLogo className="w-12 h-12 m-auto" />
                </CardBody>
              </Card>
            </motion.a>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
