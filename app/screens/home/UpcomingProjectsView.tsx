import { CTAPurple, CTAPurpleOutline } from "@/components/Button";
import Card from "@/components/Card";
import { useUpcomingSales } from "@/hooks/app/launchpad";
import SaleItemCard from "@/ui/Cards/SaleItemCard";
import { map } from "lodash";
import { useRouter } from "next/router";
import { BsArrowRight } from "react-icons/bs";
import { ThreeCircles } from "react-loader-spinner";

export default function UpcomingSalesView() {
  const { push } = useRouter();

  const { data, isLoading, error } = useUpcomingSales();
  return (
    <div className="flex flex-col gap-7 w-full justify-start items-start container mx-auto">
      <div className="w-full flex flex-col lg:flex-row justify-start lg:justify-between items-start gap-4">
        <div className="flex justify-start flex-col items-start gap-3 w-full lg:w-1/2">
          <span className="capitalize text-2xl lg:text-3xl text-[#fff] font-[400]">upcoming projects</span>
          <span className="text-[#aaa] text-sm lg:text-lg font-[500] font-inter">
            Explore our meticulously curated collection of live and forthcoming projects, rigorously vetted for
            excellence and engage in the exhilarating realm of groundbreaking unveilings.
          </span>
        </div>
        <div className="w-full lg:w-[15%]">
          <CTAPurpleOutline
            onPress={() => push("/launchpad")}
            width="100%"
            height={50}
            label={
              <div className="flex justify-between items-center gap-4 text-[#fff] w-full text-sm lg:text-lg px-2 group">
                <span className="capitalize font-[500] font-inter">see all projects</span>
                <BsArrowRight size={20} className="group-hover:translate-x-3 duration-150 ease-in-out" />
              </div>
            }
          />
        </div>
      </div>
      {isLoading ? (
        <div className="flex w-full justify-center items-center">
          <ThreeCircles color="#fff" width={60} />
        </div>
      ) : (
        <>
          {error || (data && data.length === 0) ? (
            <div className="border border-dashed border-[#0029ff] w-full lg:w-1/2 rounded-[8px]">
              <Card width="100%" height={350}>
                <div className="card-body w-full justify-center items-center">
                  <div className="flex flex-col w-full justify-center items-center gap-10 py-6 px-3 lg:px-7">
                    <span className="font-[400] capitalize text-xl lg:text-2xl text-center">
                      no upcoming projects at the moment
                    </span>
                    <span className="font-[500] capitalize text-lg lg:text-xl font-inter">apply for launch</span>
                    <CTAPurple
                      width="90%"
                      height={55}
                      label={
                        <span className="font-inter font-[500] text-sm lg:text-lg capitalize">submit your project</span>
                      }
                      onPress={() =>
                        window.open(
                          "https://docs.google.com/forms/d/e/1FAIpQLSfydXr1FpS954vGzRTiOhy-U_B5SNYYjMgSHL5Ndz7hl3zd7A/viewform?vc=0&c=0&w=1&flr=0",
                          "_blank"
                        )
                      }
                    />
                  </div>
                </div>
              </Card>
            </div>
          ) : (
            <div
              className={`flex flex-col lg:flex-row justify-start lg:justify-center items-center w-full gap-8 lg:min-h-[34rem] overflow-auto`}
            >
              {data &&
                data.length &&
                map(data, (item, index) => (
                  <div key={index} className="w-full lg:w-1/2 rounded-[8px] h-full">
                    <SaleItemCard data={item} width="100%" height="100%" />
                  </div>
                ))}
              {data && data.length === 1 && (
                <div className="border border-dashed border-[#0029ff] w-full lg:w-1/2 rounded-[8px] lg:self-stretch">
                  <Card width="100%" height="100%" style={{ flex: "1 1 auto" }}>
                    <div className="card-body w-full justify-center items-center h-full">
                      <div className="flex flex-col w-full justify-center items-center gap-10 py-6 px-3 lg:px-7">
                        <span className="font-[500] capitalize text-lg lg:text-xl font-inter">apply for launch</span>
                        <CTAPurple
                          width="90%"
                          height={55}
                          onPress={() =>
                            window.open(
                              "https://docs.google.com/forms/d/e/1FAIpQLSfydXr1FpS954vGzRTiOhy-U_B5SNYYjMgSHL5Ndz7hl3zd7A/viewform?vc=0&c=0&w=1&flr=0",
                              "_blank"
                            )
                          }
                          label={
                            <span className="font-inter font-[500] text-sm lg:text-lg capitalize">
                              submit your project
                            </span>
                          }
                        />
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
