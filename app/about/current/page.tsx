"use client";

import { Button } from "@/components/ui/button";

export default function AboutCurrent() {
  return (
    <div>
      <p className="text-neutral-600 text-lg font-light">
        <strong className="text-neutral-900 text-2xl font-medium">
          I&apos;m currently working
        </strong>{" "}
        as a Korean-English interpreter for SFA Logistics at Blueoval SK Battery
        Park, Kentucky.
      </p>
      <br />
      <p className="text-neutral-600 text-lg font-light">
        <strong className="text-neutral-900 text-2xl font-medium">
          Some of the tasks
        </strong>{" "}
        I am assigned to do are interpretation in meetings, on-site work
        process, document translation, and receiving business calls.
      </p>
      <br />
      <p className="text-neutral-600 text-lg font-light">
        <strong className="font-medium text-neutral-900 text-2xl">
          A full description of the job
        </strong>{" "}
        can be found on my most up-to-date resume{" "}
        <Button
          onClick={() => {
            alert(
              "I am working on my updated resume. Please check back later!"
            );
          }}
          variant={"link"}
          className="text-blue-500 px-0 inline-block text-lg font-light"
        >
          here
        </Button>
        .
      </p>
    </div>
  );
}
