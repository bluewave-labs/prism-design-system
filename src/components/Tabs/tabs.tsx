import { cn } from '../../lib/utils';
import { TabsProps } from '../../types';
import { Tabs as TabsComponent, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export const Tabs = ({ tabsList, defaultValue, className, ...props }: TabsProps) => {
  return (
    <TabsComponent defaultValue={defaultValue ?? tabsList[0].value} className={cn('w-[400px]', className)} {...props}>
      <TabsList>
        {tabsList.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabsList.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </TabsComponent>
  );
};

export default Tabs;
