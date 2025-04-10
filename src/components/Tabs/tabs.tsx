import { cn } from '../../lib/utils';
import { TabsProps } from '../../types';
import { Tabs as TabsComponent, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export const Tabs = ({
  tabsList,
  defaultValue,
  className,
  contentClassName,
  tabsListClassName,
  ...props
}: TabsProps) => {
  const getPosition = (index: number) => {
    if (props.variant === 'tab') {
      return 'center';
    }
    if (props.variant === 'pill') {
      return 'default';
    }
    if (index === 0) {
      return 'left';
    }
    if (index === tabsList.length - 1) {
      return 'right';
    }
    return 'center';
  };
  return (
    <TabsComponent defaultValue={defaultValue ?? tabsList[0].value} className={cn(className)} {...props}>
      <TabsList variant={props.variant} className={tabsListClassName}>
        {tabsList.map((tab, index) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            variant={props.variant}
            position={getPosition(index)}
            {...props}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabsList.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className={contentClassName}>
          {tab.content}
        </TabsContent>
      ))}
    </TabsComponent>
  );
};

export default Tabs;
