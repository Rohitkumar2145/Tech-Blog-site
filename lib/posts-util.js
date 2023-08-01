// // import fs from "fs";
// // import matter from "gray-matter";
// // import path from "path";

// // const postDirectory = path.join(process.cwd(), "posts");

// // const getPostData = (filename) => {
// //   const filePath = path.join(postDirectory, filename);
// //   const fileContent = fs.readFileSync(filePath, "utf-8");
// //   const { data, content } = matter(fileContent);
// //   const postSlug = filename.replace(/\.md$/, "");
// //   const postData = {
// //     slug: postSlug,
// //     ...data,
// //     content,
// //   };
// //   return postData;
// // };

// // export const getAllPosts = () => {
// //   const postFiles = fs.readdirSync(postDirectory);
// //   const allPosts = postFiles.map((postfile) => {
// //     return getPostData(postfile);
// //   });
// //   const sortedPosts = allPosts.sort((post1, post2) =>
// //     post1.date > post2.data ? -1 : 1
// //   );
// //   return sortedPosts;
// // };

// // export const getfeaturedPosts = () => {
// //   const allPosts = getAllPosts();
// //   const featuredPosts = allPosts.filter((post) => post.isFeatured);
// //   return featuredPosts;
// // };
// import fs from "fs";
// import path from "path";

// import matter from "gray-matter";

// const postsDirectory = path.join(process.cwd(), "posts");

// export function getPostsFiles() {
//   return fs.readdirSync(postsDirectory);
// }

// export function getPostData(postIdentifier) {
//   const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
//   const filePath = path.join(postsDirectory, `${postSlug}.md`);
//   const fileContent = fs.readFileSync(filePath, "utf-8");
//   const { data, content } = matter(fileContent);

//   const postData = {
//     slug: postSlug,
//     ...data,
//     content,
//   };

//   return postData;
// }

// export function getAllPosts() {
//   const postFiles = getPostsFiles();

//   const allPosts = postFiles.map((postFile) => {
//     return getPostData(postFile);
//   });

//   const sortedPosts = allPosts.sort((postA, postB) =>
//     postA.date > postB.date ? -1 : 1
//   );

//   return sortedPosts;
// }

// export function getFeaturedPosts() {
//   const allPosts = getAllPosts();

//   const featuredPosts = allPosts.filter((post) => post.isFeatured);

//   return featuredPosts;
// }
