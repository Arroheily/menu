
import MenuNode from './core/MenuNode';

import Find from '../../cds/demo/Find';
import TableCrudDemo from '../../cds/demo/TableCrudDemo';
import Work from '../../cds/demo/Work';

const menuRoot = MenuNode.CreateRoot('首页', '/', '');
const demo = menuRoot.addSubMenu('Demo', '/demo', 'desktop');
demo.addLeaf('查找', '/demo/find', 'desktop', Find);
demo.addLeaf('curd', '/demo/tablecruddemo', 'desktop', TableCrudDemo);
demo.addLeaf('work', '/demo/work', 'desktop', Work);
// demo.addLeaf('消息', '/demo/message', 'desktop', MessageDemo);
// demo.addLeaf('主题', '/demo/theme', 'desktop', ThemeDemo);
// demo.addLeaf('按钮test', '/demo/button', 'desktop', ButtonDemo);
// const menuDemo = demo.addSubMenu('菜单', '/demo/menu', 'desktop');
// menuDemo.addLeaf('菜单A', '/demo/menu/A', 'desktop', MenuA);
// menuDemo.addLeaf('菜单B', '/demo/menu/B', 'desktop', MenuB);
// menuRoot.addLeaf('工作', '/work', 'desktop', Work);
// menuRoot.addLeaf('日志', '/log', 'mail', Log);
// const config = menuRoot.addSubMenu('配置', '/config', 'setting');
// config.addLeaf('服务器', '/config/server', 'desktop', Servers);
// config.addLeaf('数据库', '/config/database', 'desktop', Database);
// config.addLeaf('定时器', '/config/timer', 'calendar', Timer);

export default menuRoot;
