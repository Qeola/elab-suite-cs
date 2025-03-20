"use client";
import React from "react";
import { Badge, Breadcrumb, Button } from "flowbite-react";
import Image from "next/image";
import CardBox from "@/app/components/shared/CardBox";

interface BreadCrumbType {
  subtitle?: string;
  items?: { title: string; to?: string; button?: string; image?: string }[];
  title?: string;
  image: string;
  children?: JSX.Element;
}

const BreadcrumbComp = ({
  subtitle,
  items,
  title,
  image,
  children,
}: BreadCrumbType) => {
  return (
    <CardBox className="mb-8 p-6 relative">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          {subtitle && (
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {subtitle}
            </p>
          )}
          <Breadcrumb className="mt-4">
            {items?.map((item) => (
              <Breadcrumb.Item key={item.title} href={item.to || undefined}>
                {item.to ? (
                  <span className="text-gray-600 dark:text-gray-300">
                    {item.title}
                  </span>
                ) : item.button ? (
                  <Button
                    href={item.button}
                    color="primary"
                    size="sm"
                    className="rounded-md"
                  >
                    {item.title}
                  </Button>
                ) : (
                  <Badge color="lightprimary">{item.title}</Badge>
                )}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
        {children && <div>{children}</div>}
      </div>
      <div className="absolute right-5">
        <Image
          src={image}
          alt="Breadcrumb Image"
          className="object-contain"
          width={90}
          height={90}
        />
      </div>
    </CardBox>
  );
};

export default BreadcrumbComp;
