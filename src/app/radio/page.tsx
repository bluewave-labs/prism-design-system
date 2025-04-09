/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
'use client';
import { Copy } from 'lucide-react';
import { useEffect, useState } from 'react';
import sanitizeHtml from 'sanitize-html';
import { RadioBtn } from '../../components';
import { cn } from '../../lib/utils';
import { RadioProps } from '../../types';
import codeToHtml from '../../utils/codeToHtml';

type OptionsType = 'default' | 'selected' | 'disabled';

const baseProps = {
  checked: false,
  disabled: undefined,
  label: 'Radio',
  id: 'radio',
};

const options: {
  option: OptionsType;
  text: string;
  prop: (val: Omit<RadioProps, 'onChange'>) => Omit<RadioProps, 'onChange'>;
}[] = [
  {
    option: 'default',
    text: 'Default',
    prop: (prev) => ({ ...prev, checked: false, disabled: undefined }),
  },
  {
    option: 'selected',
    text: 'Selected',
    prop: (prev) => ({
      ...prev,
      checked: !prev.checked,
    }),
  },
  {
    option: 'disabled',
    text: 'Disabled',
    prop: (prev) => ({
      ...prev,
      disabled: prev.disabled ? undefined : true,
    }),
  },
];

const propTypes = `React.ComponentPropsWithoutRef<'input'>`;

export default function Home() {
  const [props, setProps] = useState<Omit<RadioProps, 'onChange'>>(baseProps);
  const [htmlProps, setHtmlProps] = useState<string>('');
  const [selected, setSelected] = useState<OptionsType[]>([options[0].option]);
  const [propType, setPropType] = useState<string>('');

  const buildHtmlProps = async () => {
    const sanitizedProps = {
      ...props,
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
    <div className="flex justify-center items-center gap-2 w-screen">
      <div className="flex flex-col items-center gap-2 p-4 h-[200px] justify-center w-[500px]">
        <RadioBtn
          onChange={() => {
            const option = options.find((opt) => opt.option === 'selected');
            if (option) {
              setSelected((prev) => {
                if (prev.includes('selected')) {
                  return prev.filter((item) => item !== 'selected');
                } else {
                  return [...prev.filter((it) => it !== 'default'), 'selected'];
                }
              });
              setProps((prev) => option?.prop(prev));
            }
          }}
          {...props}
        />
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
                let newList = selected;
                if (option.option === 'default') {
                  newList = selected.filter((item) => item !== 'selected');
                } else if (option.option === 'selected') {
                  newList = selected.filter((item) => item !== 'default');
                }
                if (selected.includes(option.option)) {
                  setSelected(newList.filter((item) => item !== option.option));
                } else {
                  setSelected([...newList, option.option]);
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
