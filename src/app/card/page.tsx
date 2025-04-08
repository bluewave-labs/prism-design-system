/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
'use client';
import { Copy } from 'lucide-react';
import { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import sanitizeHtml from 'sanitize-html';
import { Button, Card, CardContent, CardFooter, CardProps, CardTitle } from '../../components';
import { cn } from '../../lib/utils';
import codeToHtml from '../../utils/codeToHtml';
import { ConsoleButton } from '../../components/ui/card';

type OptionsType = 'default' | 'clickable' | 'console' | 'asChild';

const baseProps: CardProps = {
  children: (
    <>
      <CardTitle>Title</CardTitle>
      <CardContent>Content</CardContent>
      <CardFooter>Footer</CardFooter>
    </>
  ),
};

const options: { option: OptionsType; text: string; prop: (val: CardProps) => CardProps }[] = [
  {
    option: 'default',
    text: 'Default',
    prop: () => baseProps,
  },
  {
    option: 'clickable',
    text: 'Clickable',
    prop: (prev) => ({
      ...prev,
      variant: prev.variant === 'clickable' ? undefined : 'clickable',
      children:
        prev.variant !== 'clickable' ? (
          <>
            <CardTitle>Title</CardTitle>
            <CardContent>Content</CardContent>
            <CardFooter>
              <Button asChild>
                <a href="#">Link</a>
              </Button>
            </CardFooter>
          </>
        ) : (
          <>
            <CardTitle>Title</CardTitle>
            <CardContent>Content</CardContent>
            <CardFooter>Footer</CardFooter>
          </>
        ),
    }),
  },
  {
    option: 'console',
    text: 'Console',
    prop: (prev) => ({
      ...prev,
      variant: prev.variant === 'console' ? undefined : 'console',
      children:
        prev.variant !== 'console' ? (
          <>
            <CardTitle>Title</CardTitle>
            <CardContent>Content</CardContent>
            <CardFooter>
              <ConsoleButton asChild>
                <a href="#">Link</a>
              </ConsoleButton>
            </CardFooter>
          </>
        ) : (
          <>
            <CardTitle>Title</CardTitle>
            <CardContent>Content</CardContent>
            <CardFooter>Footer</CardFooter>
          </>
        ),
    }),
  },
  {
    option: 'asChild',
    text: 'As Child',
    prop: (prev) => ({
      ...prev,
      asChild: !prev.asChild,
      children: prev.asChild ? (
        <>
          <CardTitle>Title</CardTitle>
          <CardContent>Content</CardContent>
          <CardFooter>Footer</CardFooter>
        </>
      ) : (
        <a href="https://www.radix-ui.com/docs/primitives/components/button">
          <CardTitle>Title</CardTitle>
          <CardContent>Content</CardContent>
          <CardFooter>Footer</CardFooter>
        </a>
      ),
    }),
  },
];

const propTypes = `React.ComponentProps<'div'> & {
  asChild?: boolean;
  variant?: 'default' | 'clickable' | 'console';
}`;

const variants = ['default', 'clickable', 'console'] as const;
type VariantsType = (typeof variants)[number];

export default function Home() {
  const [props, setProps] = useState<CardProps>(baseProps);
  const [htmlProps, setHtmlProps] = useState<string>('');
  const [selected, setSelected] = useState<OptionsType[]>([options[0].option]);
  const [propType, setPropType] = useState<string>('');

  const buildHtmlProps = async () => {
    const sanitizedProps = {
      ...props,
      children: props.asChild
        ? ReactDOMServer.renderToString(props.children)
        : `<CardTitle>Title</CardTitle>
      <CardContent>Content</CardContent>
      <CardFooter>Footer</CardFooter>`,
    };
    const html = await codeToHtml(JSON.stringify(sanitizedProps, null, 2));
    setHtmlProps(html);
  };

  const buildPropTypes = async () => {
    const propToHtml = await codeToHtml(propTypes);
    setPropType(propToHtml);
  };

  useEffect(() => {
    buildHtmlProps();
  }, [props]);

  useEffect(() => {
    if (selected.length === 0) {
      setSelected([options[0].option]);
      setProps(baseProps);
    }
  }, [selected]);

  useEffect(() => {
    buildPropTypes();
  }, []);

  return (
    <div className="flex justify-center items-start gap-2 w-screen">
      <div className="flex flex-col items-center gap-2 p-4 h-screen justify-center w-[300px]">
        <Card {...props} />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 p-4 text-gray-0 w-[500px]">
        <div className="flex flex-wrap items-center justify-center gap-2 w-[95%]">
          {options.map((option) => (
            <button
              key={option.option}
              className={cn(
                'border border-gray-10 text-gray-10 px-4 py-2 rounded-3xl cursor-pointer w-50',
                selected.includes(option.option) ? 'bg-gray-20 text-gray-90' : 'hover:bg-gray-0/12 hover:text-gray-10'
              )}
              onClick={() => {
                if (option.option === 'default') {
                  setSelected([option.option]);
                  setProps(option.prop);
                } else {
                  const isSelected = selected.includes(option.option);
                  const isVariant = variants.includes(option.option as VariantsType);
                  let newList: OptionsType[] = selected.filter((it) => it !== 'default');
                  if (isVariant) {
                    newList = isSelected
                      ? newList.filter((it) => it !== option.option)
                      : [...newList.filter((it) => !variants.includes(it as VariantsType)), option.option];
                  } else {
                    newList = isSelected ? selected.filter((it) => it !== option.option) : [...selected, option.option];
                  }
                  setSelected(newList);
                }
                setProps((prev) => option.prop(prev));
              }}
            >
              {option.text}
            </button>
          ))}
        </div>
        <div className="relative mt-4 w-[95%] overflow-auto h-[40%]">
          <button
            className="text-gray-50 absolute top-4 right-8 cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(propTypes);
            }}
            title="Copy props to clipboard"
          >
            <Copy />
          </button>
          <p
            className="flex flex-col mx-auto bg-gray-100 p-2 w-full h-full overflow-auto"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(propType) }}
          />
        </div>
      </div>
      <div className="w-[500px] h-screen p-4 relative">
        <button
          className="text-gray-50 absolute top-20 right-8 cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(JSON.stringify(props, null, 2));
          }}
          title="Copy props to clipboard"
        >
          <Copy />
        </button>
        <h2 className="font-medium text-xl mb-4">Props</h2>
        <p
          className="flex flex-col w-full min-w-[300px] bg-gray-100 h-[90%] overflow-auto p-2"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(htmlProps) }}
        />
      </div>
    </div>
  );
}
