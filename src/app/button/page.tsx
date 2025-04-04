'use client';
import { Button } from '@/components';
import { cn } from '@/lib/utils';
import { ButtonProps } from '@/types';
import codeToHtml from '@/utils/codeToHtml';
import { Copy } from 'lucide-react';
import { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import sanitizeHtml from 'sanitize-html';

type OptionsType =
  | 'default'
  | 'action'
  | 'destructive'
  | 'outline'
  | 'outline_active'
  | 'secondary'
  | 'ghost'
  | 'link'
  | 'size-xs'
  | 'size-sm'
  | 'size-md'
  | 'size-lg'
  | 'size-icon'
  | 'rounded-sm'
  | 'rounded-md'
  | 'rounded-lg'
  | 'rounded-full'
  | 'asChild';

const baseProps: ButtonProps = {
  children: 'Button',
};

const options: { option: OptionsType; text: string; prop: (val: ButtonProps) => ButtonProps }[] = [
  {
    option: 'default',
    text: 'Default',
    prop: () => baseProps,
  },
  // {
  //   option: 'action',
  //   text: 'Action',
  //   prop: (prev) => ({
  //     ...prev,
  //     variant: prev.variant === 'action' ? undefined : 'action',
  //   }),
  // },
  {
    option: 'destructive',
    text: 'Destructive',
    prop: (prev) => ({
      ...prev,
      variant: prev.variant === 'destructive' ? undefined : 'destructive',
    }),
  },
  {
    option: 'outline',
    text: 'Outline',
    prop: (prev) => ({
      ...prev,
      variant: prev.variant === 'outline' ? undefined : 'outline',
    }),
  },
  {
    option: 'outline_active',
    text: 'Outline Active',
    prop: (prev) => ({
      ...prev,
      variant: prev.variant === 'outline_active' ? undefined : 'outline_active',
    }),
  },
  {
    option: 'secondary',
    text: 'Secondary',
    prop: (prev) => ({
      ...prev,
      variant: prev.variant === 'secondary' ? undefined : 'secondary',
    }),
  },
  {
    option: 'ghost',
    text: 'Ghost',
    prop: (prev) => ({
      ...prev,
      variant: prev.variant === 'ghost' ? undefined : 'ghost',
    }),
  },
  {
    option: 'link',
    text: 'Link',
    prop: (prev) => ({
      ...prev,
      variant: prev.variant === 'link' ? undefined : 'link',
    }),
  },
  {
    option: 'size-xs',
    text: 'Size XS',
    prop: (prev) => ({
      ...prev,
      size: prev.size === 'xs' ? undefined : 'xs',
    }),
  },
  {
    option: 'size-sm',
    text: 'Size SM',
    prop: (prev) => ({
      ...prev,
      size: prev.size === 'sm' ? undefined : 'sm',
    }),
  },
  {
    option: 'size-md',
    text: 'Size MD',
    prop: (prev) => ({
      ...prev,
      size: prev.size === 'md' ? undefined : 'md',
    }),
  },
  {
    option: 'size-lg',
    text: 'Size LG',
    prop: (prev) => ({
      ...prev,
      size: prev.size === 'lg' ? undefined : 'lg',
    }),
  },
  {
    option: 'size-icon',
    text: 'Size Icon',
    prop: (prev) => ({
      ...prev,
      size: prev.size === 'icon' ? undefined : 'icon',
    }),
  },
  {
    option: 'rounded-sm',
    text: 'Rounded SM',
    prop: (prev) => ({
      ...prev,
      rounded: prev.rounded === 'sm' ? undefined : 'sm',
    }),
  },
  {
    option: 'rounded-md',
    text: 'Rounded MD',
    prop: (prev) => ({
      ...prev,
      rounded: prev.rounded === 'md' ? undefined : 'md',
    }),
  },
  {
    option: 'rounded-lg',
    text: 'Rounded LG',
    prop: (prev) => ({
      ...prev,
      rounded: prev.rounded === 'lg' ? undefined : 'lg',
    }),
  },
  {
    option: 'rounded-full',
    text: 'Rounded FULL',
    prop: (prev) => ({
      ...prev,
      rounded: prev.rounded === 'full' ? undefined : 'full',
    }),
  },
  {
    option: 'asChild',
    text: 'As Child',
    prop: (prev) => ({
      ...prev,
      asChild: !prev.asChild,
      children: prev.asChild ? (
        'Button'
      ) : (
        <a href="https://www.radix-ui.com/docs/primitives/components/button">Button</a>
      ),
    }),
  },
];

const propTypes = `React.ComponentProps<'button'> & {
  asChild?: boolean;
  variant?: 'default' | 'action' | 'destructive' | 'outline' | 'outline_active' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'icon';
  rounded?: 'default' | 'sm' | 'md' | 'lg' | 'full';
}`;

const variants = [
  'default',
  'action',
  'destructive',
  'outline',
  'outline_active',
  'secondary',
  'ghost',
  'link',
] as const;
const sizes = ['size-xs', 'size-sm', 'size-md', 'size-lg', 'size-icon'] as const;
const rounded = ['rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-full'] as const;
type VariantsType = (typeof variants)[number];
type SizesType = (typeof sizes)[number];
type RoundedType = (typeof rounded)[number];

export default function Home() {
  const [props, setProps] = useState<ButtonProps>(baseProps);
  const [htmlProps, setHtmlProps] = useState<string>('');
  const [selected, setSelected] = useState<OptionsType[]>([options[0].option]);
  const [propType, setPropType] = useState<string>('');
  const [disabled, setDisabled] = useState(false);

  const buildHtmlProps = async () => {
    const sanitizedProps = {
      ...props,
      children: props.asChild ? ReactDOMServer.renderToString(props.children) : props.children,
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
        <Button {...props} disabled={disabled} />
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
                  const isSize = sizes.includes(option.option as SizesType);
                  const isRounded = rounded.includes(option.option as RoundedType);
                  let newList: OptionsType[] = selected.filter((it) => it !== 'default');
                  console.log({ isVariant, isSize, isRounded });
                  if (isVariant) {
                    newList = isSelected
                      ? newList.filter((it) => it !== option.option)
                      : [...newList.filter((it) => !variants.includes(it as VariantsType)), option.option];
                  } else if (isSize) {
                    newList = isSelected
                      ? newList.filter((it) => it !== option.option)
                      : [...newList.filter((it) => !sizes.includes(it as SizesType)), option.option];
                  } else if (isRounded) {
                    newList = isSelected
                      ? newList.filter((it) => it !== option.option)
                      : [...newList.filter((it) => !rounded.includes(it as RoundedType)), option.option];
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
          <label htmlFor="disable" className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              id="disable"
              className="mr-2 cursor-pointer"
              checked={disabled}
              onChange={(e) => {
                setDisabled(e.target.checked);
              }}
            />{' '}
            Disabled
          </label>
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
