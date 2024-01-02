import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

const tabs: Tab [] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">
        Tabs page
      </h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed" data-cy="tab-content">
          <ul>
            {tabs.map((tab) => {
              const { id, title } = tab;

              return (
                <li
                  className={cn({
                    'is-active': id === selectedTab?.id,
                  })}
                  data-cy="Tab"
                  key={id}
                >
                  <Link to={`/tabs/${id}`}>
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab?.content || 'Please select a tab'}
        </div>
      </div>
    </>
  );
};