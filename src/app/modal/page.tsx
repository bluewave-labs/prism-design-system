/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
'use client';
import { Copy } from 'lucide-react';
import { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import sanitizeHtml from 'sanitize-html';
import { Button, Input, Modal } from '../../components';
import { cn } from '../../lib/utils';
import { ModalProps } from '../../types';
import codeToHtml from '../../utils/codeToHtml';

type OptionsType = 'default' | 'custom-close';

const baseProps: ModalProps = {
  modalTrigger: <Button variant="destructive">Delete</Button>,
  modalTitle: 'Are you absolutely sure?',
  modalDescription:
    'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
};

const options: {
  option: OptionsType;
  text: string;
  prop: (val: ModalProps) => ModalProps;
}[] = [
  {
    option: 'default',
    text: 'Default',
    prop: () => baseProps,
  },
  {
    option: 'custom-close',
    text: 'Custom close button',
    prop: (prev) => ({
      ...prev,
      modalTitle: <h1>Share link</h1>,
      modalDescription: 'Anyone who has this link will be able to view this.',
      modalContent: (
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <label htmlFor="link" className="sr-only">
              Link
            </label>
            <Input variant='icon' iconRight={<><span className="sr-only">Copy</span>
            <Copy /></>} id="link" defaultValue="https://ui.shadcn.com/docs/installation" readOnly />
          </div>
        </div>
      ),
      customModalClose: <Button variant="secondary">Close</Button>,
    }),
  },
];

const propTypes = `type ModalProps = {
  modalTrigger: ReactNode | string;
  modalTitle?: ReactNode;
  modalDescription?: ReactNode;
  modalContent?: ReactNode;
  modalFooter?: ReactNode;
  customModalClose?: ReactNode;
}`;

export default function Home() {
  const [props, setProps] = useState<ModalProps>(baseProps);
  const [htmlProps, setHtmlProps] = useState<string>('');
  const [selected, setSelected] = useState<OptionsType[]>([options[0].option]);
  const [propType, setPropType] = useState<string>('');

  const buildHtmlProps = async () => {
    const sanitizedProps = {
      ...props,
      modalTrigger: ReactDOMServer.renderToString(props.modalTrigger),
      modalContent: props.modalContent ? ReactDOMServer.renderToString(props.modalContent) : undefined,
      modalTitle: props.modalTitle ? ReactDOMServer.renderToString(props.modalTitle) : undefined,
      modalDescription: props.modalDescription ? ReactDOMServer.renderToString(props.modalDescription) : undefined,
      customModalClose: props.customModalClose ? ReactDOMServer.renderToString(props.customModalClose) : undefined,
      modalFooter: props.modalFooter ? ReactDOMServer.renderToString(props.modalFooter) : undefined,
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
    <div className="flex flex-col justify-center items-center gap-2 w-screen">
      <div className="flex flex-col items-center gap-2 p-4 h-[500px] justify-center w-full">
        <Modal {...props} />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 p-4 text-gray-0 w-[500px]">
        {options.map((option) => (
          <button
            key={option.option}
            className={cn(
              'border border-gray-10 text-gray-10 px-4 py-2 rounded-3xl cursor-pointer md:w-50',
              selected.includes(option.option) ? 'bg-gray-20 text-gray-90' : 'hover:bg-gray-0/12 hover:text-gray-10'
            )}
            onClick={() => {
              setSelected([option.option]);
              setProps((prev) => option.prop(prev));
            }}
          >
            {option.text}
          </button>
        ))}
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
            console.log(props);
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
