export default class MenuNode {
    public static CreateRoot(name: string, router: string, iconType: string): MenuNode {
        const root = new MenuNode(name, router, iconType);
        root.isRoot = true;
        return root;
    }

    public isRoot: boolean = false;
    public isSubMenu: boolean = false;
    public isLeaf: boolean = false;

    public component: any;
    public iconType: string;
    public name: string;
    public router: string;
    public children: MenuNode[] = [];
    public parent?: MenuNode;

    private constructor(name: string, router: string, iconType: string, component?: any) {
        this.name = name;
        this.router = router;
        this.iconType = iconType;
        this.component = component;
    }
    
    // 根据当前路径，获取节点
    public getNodesByLocation(): MenuNode[] {
        let routes: string[] = ['/'];
        const subUrlItems = location.pathname.split('/').filter(i => i);
        for (let i = subUrlItems.length - 1; i >= 0; i--) {
            for (let j = i - 1; j >= 0; j--) {
                subUrlItems[i] = subUrlItems[j] + '/' + subUrlItems[i];
            }
            subUrlItems[i] = '/' + subUrlItems[i];
        }

        routes = routes.concat(subUrlItems);
        return this.getNodesByRoutes(routes);
    }

    // 增加一个子菜单（子菜单有子节点， 没有component）
    public addSubMenu(name: string, router: string, iconType: string): MenuNode {
        const node = new MenuNode(name, router, iconType);
        node.isSubMenu = true;
        return this.addChildNode(node);
    }

    // 增加一个叶子节点（叶子节点没有子节点， 有component）
    public addLeaf(name: string, router: string, iconType: string, component: any): MenuNode {
        const node = new MenuNode(name, router, iconType, component);
        node.isLeaf = true;
        return this.addChildNode(node);
    }

    // 将tree结构转换为array
    public getMenuNodes(): MenuNode[] {
        let nodeArray: MenuNode[] = [];
        nodeArray.push(this);

        if (this.children !== undefined) {
            this.children.forEach(x => {
                nodeArray = nodeArray.concat(x.getMenuNodes());
            });
        }

        return nodeArray;
    }

    // 遍历树获取第一个叶子节点
    public getFirstLeaf(): MenuNode {
        if (this.children !== undefined && this.children.length > 0) {
            return this.children[0].getFirstLeaf();
        }
        return this;
    }

    // 增加一个子节点
    private addChildNode(child: MenuNode): MenuNode {
        if (this.children === undefined) {
            this.children = [];
        }

        child.parent = this;
        this.children.push(child);
        return child;
    }

    // 根据路由获取节点
    private getNodesByRoutes(routes: string[]): MenuNode[] {
        const nodeArray = this.getMenuNodes();
        return nodeArray.filter(x => routes.indexOf(x.router) > 0);
    }
}
