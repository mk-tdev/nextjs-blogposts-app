import { Post } from "@/app-configs/app-types";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import darcula from "react-syntax-highlighter/dist/cjs/styles/prism/darcula";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("jsx", jsx);

const PostItem = (props: Post) => {
  const {
    title,
    image,
    date,
    slug,
    excerpt,
    content,
    asFullPage = false,
  } = props;
  const imagePath = `/images/posts/${slug}/${image}`;

  const MarkdownComponents: object = {
    p: (paragraph: { children?: any; node?: any }) => {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        const imgPath = `/images/posts/${slug}/${image.properties.src}`;

        return (
          <Image
            src={imgPath}
            width={400}
            height={250}
            className="postImg"
            alt={image.properties.alt}
            priority={false}
          />
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code: (code: { node?: any }) => {
      const { node } = code;
      if (node.tagName === "code") {
        const code = node.children[0];
        const { language, value } = code;

        return (
          <SyntaxHighlighter language={language} style={darcula}>
            {value}
          </SyntaxHighlighter>
        );
      }
    },
  };

  return (
    <div
      className={`${
        asFullPage
          ? "bg-white"
          : "bg-white shadow-md rounded-lg overflow-hidden"
      }`}
    >
      <Image
        src={imagePath}
        alt={title}
        width={400}
        height={250}
        priority={false}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <time> {date}</time>

        <div className="text-gray-600 mb-4">
          {asFullPage ? (
            <ReactMarkdown components={MarkdownComponents}>
              {content}
            </ReactMarkdown>
          ) : (
            <p>{excerpt}</p>
          )}
        </div>

        {!asFullPage && (
          <Link
            href={`/posts/${slug}`}
            className="text-blue-500 hover:text-blue-700"
          >
            Read More
          </Link>
        )}
      </div>
    </div>
  );
};

export default PostItem;
