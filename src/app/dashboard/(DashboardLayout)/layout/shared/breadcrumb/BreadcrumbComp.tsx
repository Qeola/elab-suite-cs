"use client";
import React from "react";
import { Badge, Breadcrumb, Button } from "flowbite-react";
import CardBox from "@/app/components/shared/CardBox";
import { Icon } from "@iconify/react";

interface BreadCrumbType {
  subtitle?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items?: any[];
  title?: string;
  children?: JSX.Element;
}

const BreadcrumbComp = ({ items, title }: BreadCrumbType) => {
  return (
    <>
      <CardBox className={`mb-[30px] py-4`}>
        <Breadcrumb className="flex justify-between">
          <h6 className="text-base">{title}</h6>
          <div className="flex items-center gap-3">
            {items
              ? items.map((item) => (
                  <div key={item.title}>
                    {item.to ? (
                      <Breadcrumb.Item href={item.to}>
                        <Icon
                          icon="solar:home-2-line-duotone"
                          height={20}
                        ></Icon>{" "}
                      </Breadcrumb.Item>
                    ) : item.button ? (
                      // <Breadcrumb.Item href={item.to}>
                      //   <Icon
                      //     icon="solar:home-2-line-duotone"
                      //     height={20}
                      //   ></Icon>{" "}
                      // </Breadcrumb.Item>
                      <Button
                        href={item.button}
                        color={"primary"}
                        size="medium"
                        className="rounded-md w-full px-4 py-2 font-bold"
                      >
                        {item.title}
                      </Button>
                    ) : item.title ? (
                      <Badge color={"lightprimary"}>{item.title}</Badge>
                    ) : null}
                  </div>
                ))
              : ""}
          </div>
        </Breadcrumb>
      </CardBox>
    </>
  );
};

export default BreadcrumbComp;
