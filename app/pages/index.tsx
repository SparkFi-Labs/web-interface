/* eslint-disable @next/next/no-img-element */
import { Accordion, AccordionItem } from "@/components/Accordion";
import { CTAPurple, CTAPurpleOutline } from "@/components/Button";
import UpcomingSalesView from "@/screens/home/UpcomingProjectsView";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const BenefitCard = ({ children }: any) => (
  <div className="rounded-[7px] py-14 px-2 bg-[#151938] w-full lg:w-1/4 lg:min-h-[35rem]">{children}</div>
);

export default function Home() {
  const { push } = useRouter();
  return (
    <>
      <Head>
        <title>SparkFi | Incubation Hub</title>
      </Head>
      <div className="flex flex-col w-screen gap-12 justify-start items-start relative">
        <div className="absolute lg:w-[6.20875rem] lg:h-[6.20875rem] rounded-[50%] bg-[radial-gradient(115.01%_115.01%_at_24.60%_19.00%,_#0F1122_0%,_#0F1122_65.18%,_#FFF_94.37%)] -rotate-[176.89deg] right-10 top-10"></div>
        <div className="absolute lg:w-[8.03931rem] lg:h-[8.03931rem] rounded-[50%] bg-[radial-gradient(115.01%_115.01%_at_24.60%_19.00%,_#0F1122_0%,_#0F1122_65.18%,_#FFF_94.37%)] -rotate-[105.332deg] left-10 top-20"></div>
        <div className="absolute lg:w-[3.15369rem] lg:h-[3.15369rem] rounded-[50%] bg-[radial-gradient(115.01%_115.01%_at_24.60%_19.00%,_#0F1122_0%,_#0F1122_65.18%,_#FFF_94.37%)] -rotate-[140.595deg] left-10 top-80"></div>
        <div className="absolute lg:w-[4.791rem] lg:h-[4.791rem] rounded-[50%] bg-[radial-gradient(115.01%_115.01%_at_24.60%_19.00%,_#0F1122_0%,_#0F1122_65.18%,_#FFF_94.37%)] -rotate-[176.89deg] right-10 top-80"></div>
        <section className="py-12 px-3 w-full flex justify-center items-center">
          <div className="flex flex-col justify-start items-center w-full lg:w-1/3 gap-6 relative lg:py-[6rem]">
            {/* <div className="absolute lg:-top-[8rem] rounded-[1000px]">
            <Image src="/images/ellipse_top.svg" width={1400} height={1000} alt="ellipse" />
            </div> */}

            <span className="text-[#fff] text-[1.4rem] lg:text-[3.125rem] capitalize font-[400] text-center">
              ignite your startup&apos;s success
            </span>
            <span className="text-[#aaa] text-[0.9em] font-[500] leading-5 text-center font-inter">
              An innovative solution for token launches, supporting new projects and fostering liquidity provisioning on
              Base Network
            </span>
            <div className="w-full lg:w-1/2 flex justify-center items-center gap-3 lg:gap-7 px-3">
              <CTAPurple label="Enter App" width="50%" height={50} onPress={() => push("/launchpad")} />
              <CTAPurpleOutline
                label="Read Docs"
                width="50%"
                height={50}
                onPress={() => window.open("https://docs.sparkfi.xyz", "_blank")}
              />
            </div>
          </div>
        </section>
        <section className="bg-[#101221] w-full flex flex-col justify-start items-center gap-4 px-3 lg:px-9 pt-20 pb-6 lg:pb-48">
          <div className="flex flex-col-reverse lg:flex-row justify-start items-center lg:justify-around gap-10 lg:items-start w-full">
            <Image src="/images/cubes.svg" width={644} height={644} alt="cubes" />
            <div className="flex flex-col justify-start items-center lg:items-start gap-12 lg:w-1/3">
              <span className="capitalize text-[#fff] font-[400] text-[1.4em] lg:text-[30px] leading-9">
                about sparkFi
              </span>
              <p className="text-[#aaa] font-[500] text-[0.85em] lg:text-[0.96em] font-inter text-center lg:text-justify">
                SparkFi is the first launchpad platform built on the Base blockchain, designed to support new blockchain
                projects in a decentralized manner. By possessing a specific amount of SPAK tokens, users can
                participate in any launch on SparkFi, allowing them to purchase tokens from promising projects right
                from their early stages.
              </p>

              <p className="text-[#aaa] font-[500] text-[0.85em] lg:text-[0.96em] font-inter text-center lg:text-justify">
                Our mission is to provide a decentralized launchpad platform on the Base blockchain for new and
                innovative blockchain projects to be launched and achieve their full potential.
              </p>

              <p className="text-[#aaa] font-[500] text-[0.85em] lg:text-[0.96em] font-inter text-center lg:text-justify">
                By offering carefully vetted opportunities, we empowers retail investors with the chance to get in on
                the ground floor of potential high-growth ventures. Whether you&apos;re a seasoned investor or just
                starting, we provides a user-friendly platform for you to explore and diversify your investments in the
                thriving world of crypto projects opportunities.
              </p>

              <p className="text-[#aaa] font-[500] text-[0.85em] lg:text-[0.96em] font-inter text-center lg:text-justify">
                With our easy-to-use interface and advanced features, SparkFi is set to become the go-to platform for
                innovative blockchain projects looking to get off the ground and easily reach their full potential.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col justify-start items-center gap-4 px-3 lg:px-9 py-12 bg-transparent">
          <div className="flex flex-col lg:flex-row justify-start lg:justify-between gap-7 lg:gap-10 items-center lg:items-start w-full lg:px-10 px-2">
            <UpcomingSalesView />
          </div>
        </section>
        <section className="bg-[#101221] w-full flex flex-col justify-start items-center gap-9 lg:gap-12 px-3 lg:px-9 py-12 flex-1">
          <span className="capitalize text-[#fff] font-[400] text-[1.4em] lg:text-[30px] leading-9">
            what makes us different
          </span>
          <div className="flex flex-col lg:flex-row justify-start lg:justify-between gap-7 lg:gap-10 items-center lg:items-start w-full lg:px-10 relative">
            <div className="flex flex-col gap-8 lg:gap-14 w-full lg:w-1/3">
              <div className="flex flex-col justify-start items-center lg:items-start w-full gap-5 lg:px-8">
                <Image src="/images/shopping_cart.svg" width={70} height={70} alt="shopping_cart" />
                <span className="text-[#fff] font-[500] text-[0.98em] lg:text-[20px] capitalize leading-6">
                  selective listing
                </span>
                <p className="text-[#aaa] font-[400] text-[0.85em] lg:text-[0.96em] font-inter text-center lg:text-justify">
                  We adopt a careful and selective approach to project listings on our platform. We prioritize projects
                  with strong fundamentals, innovative concepts, and real-world use cases.
                </p>
              </div>

              <div className="flex flex-col justify-start items-center lg:items-start w-full gap-5 lg:px-8">
                <Image src="/images/heart.svg" width={70} height={70} alt="heart" />
                <span className="text-[#fff] font-[500] text-[0.98em] lg:text-[20px] capitalize leading-6">
                  user friendly
                </span>
                <p className="text-[#aaa] font-[400] text-[0.85em] lg:text-[0.96em] font-inter text-center lg:text-justify">
                  We designed our platform to be accessible and user-friendly, making it easier for both seasoned
                  investors and newcomers to explore and participate in the world of blockchain projects.
                </p>
              </div>
            </div>

            <div className="hidden lg:block absolute h-80 w-80 rounded-[50%] bg-[radial-gradient(50%_50.00%_at_50%_50.00%,_rgba(0,_41,_255,_0.70)_0%,_rgba(7,_13,_55,_0.00)_100%)] lg:left-[calc(50%_-_353.23px/2_-_0.39px)]"></div>

            <div className="flex flex-col gap-8 lg:gap-14 w-full lg:w-1/3">
              <div className="flex flex-col justify-start items-center lg:items-start w-full gap-5 lg:px-8">
                <Image src="/images/shield.svg" width={70} height={70} alt="shield" />
                <span className="text-[#fff] font-[500] text-[0.98em] lg:text-[20px] capitalize leading-6">
                  SparkFi protect
                </span>
                <p className="text-[#aaa] font-[400] text-[0.85em] lg:text-[0.96em] font-inter text-center lg:text-justify">
                  We developed a special feature that safeguards Vested IDOs on the our platform. It is designed to
                  ensure the protection and integrity of both investors and the projects launched on our platform.
                </p>
              </div>

              <div className="flex flex-col justify-start items-center lg:items-start w-full gap-5 lg:px-8">
                <Image src="/images/link.svg" width={70} height={70} alt="link" />
                <span className="text-[#fff] font-[500] text-[0.98em] lg:text-[20px] capitalize leading-6">
                  built on base
                </span>
                <p className="text-[#aaa] font-[400] text-[0.85em] lg:text-[0.96em] font-inter text-center lg:text-justify">
                  We developed our platform on Base, most secure, low-cost, developer-friendly Ethereum L2 network built
                  to bring the next billion users to web3. It is powered by Optimism&apos;s OP Stack.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col justify-start items-center gap-4 lg:gap-16 px-3 lg:px-10 py-3 lg:py-12 bg-transparent">
          <span className="capitalize text-[#fff] font-[400] text-[1.4em] lg:text-[30px] leading-9">
            frequently asked questions
          </span>
          <div className="flex flex-col lg:flex-row justify-start lg:justify-center items-center lg:items-start w-full gap-7">
            <div className="w-full lg:w-1/2 lg:px-12">
              <Accordion>
                <AccordionItem title="What is SparkFi?">
                  <span className="font-[500] text-[0.95em] lg:text-[1em] text-[#fff] leading-5 font-inter">
                    SparkFi is a pioneering GameFi-designed launchpad that serves as the ultimate incubator for
                    high-quality projects on the Base chain and beyond.
                  </span>
                </AccordionItem>
                <AccordionItem title="What kind of projects should we expect on SparkFi?">
                  <span className="font-[500] text-[0.95em] lg:text-[1em] text-[#fff] leading-5 font-inter">
                    We only select the best projects. Projects to look out for are focused on blockchain games, NFTs,
                    the Metaverse, DeFi, and other recent developments in the blockchain space.
                  </span>
                </AccordionItem>
                <AccordionItem title="How do I participate in the IDO?">
                  <span className="font-[500] text-[0.95em] lg:text-[1em] text-[#fff] leading-5 font-inter">
                    Buy and stake SPAK or SPAK-LP tokens to gain a spot in IDOs while you wait for the IDO pools to
                    open. When the pool is open, participate by depositing a minimum amount of desired token allocation
                    you want to purchase in ETH.
                  </span>
                </AccordionItem>
                <AccordionItem title="Is SparkFi multi-chain?">
                  <span className="font-[500] text-[0.95em] lg:text-[1em] text-[#fff] leading-5 font-inter">
                    Currently, it is only on BASE. We&apos;ll gradually integrate other chains to make SparkFi a
                    multichain launchpad.
                  </span>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="w-full lg:w-1/2 lg:px-12">
              <Accordion>
                <AccordionItem title="When can we claim the IDO tokens?">
                  <span className="font-[500] text-[0.95em] lg:text-[1em] text-[#fff] leading-5 font-inter">
                    Token unlock/claim will be in accordance with the vesting schedule of the project.
                  </span>
                </AccordionItem>
                <AccordionItem title="Why Base?">
                  <span className="font-[500] text-[0.95em] lg:text-[1em] text-[#fff] leading-5 font-inter">
                    Base offers a secure, low-cost, flexible and developer-friendly Ethereum L2 blockchain platform that
                    support a wide range of use cases, from gaming and entertainment to finance and commerce.
                  </span>
                </AccordionItem>
                <AccordionItem title="Will there be a token? Where can I learn about it?">
                  <span className="font-[500] text-[0.95em] lg:text-[1em] text-[#fff] leading-5 font-inter">
                    The token is expected to launch in Q2-Q3 of 2023.
                  </span>
                </AccordionItem>
                <AccordionItem title="How can I contact the team?">
                  <span className="font-[500] text-[0.95em] lg:text-[1em] text-[#fff] leading-5 font-inter">
                    You can get in touch with the team via our social handles.
                  </span>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        {/* <section className="w-full flex justify-center items-center gap-4 lg:gap-16 px-3 lg:px-10 py-3 lg:py-36 bg-transparent">
          <div className="w-full bg-[linear-gradient(98.34deg,_#000000_-2.54%,_#6100FF_70.68%,_#000000_105.77%)] rounded-[20px] flex justify-center items-start px-3 py-5 lg:py-12 overflow-clip">
            <div className="flex flex-col w-full lg:w-1/3 justify-start items-center gap-2 lg:gap-5">
              <img src="/images/polygon1.svg" className="w-1/3 h-32 lg:h-56 -mt-[4rem]" alt="triangle" />
              <div className="flex flex-col gap-2 justify-start items-center w-full">
                <span className="text-[#fff] font-[600] text-[1.4em] lg:text-[35px] leading-9 text-center">
                  Is your project ready to take off on SparkFi?
                </span>
                <span className="text-[#aaa] font-[400] text-[0.89em] lg:text-[18px] text-center leading-5">
                  Apply to launch your project on SparkFi, or submit an early expression of interest to join our
                  innovative platform and get set for an incredible launch experience!
                </span>
              </div>
              <div className="w-full flex justify-start items-center gap-3">
                <img src="/images/polygon2.svg" className="w-1/3 h-32 lg:h-56" alt="triangle" />
                <CTAMainBG
                  label="Apply for launch"
                  width="33.3%"
                  height={50}
                  onPress={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSfydXr1FpS954vGzRTiOhy-U_B5SNYYjMgSHL5Ndz7hl3zd7A/viewform?vc=0&c=0&w=1&flr=0",
                      "_blank"
                    )
                  }
                />
                <img src="/images/polygon3.svg" className="w-1/3 h-32 lg:h-56" alt="triangle" />
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
}
