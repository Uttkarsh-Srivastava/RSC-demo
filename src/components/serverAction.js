"use server";

const promise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("server action resolved");
    }, 2000);
  });
};

export const serverAction = async () => {
  const res = await promise();
  return res;
};
