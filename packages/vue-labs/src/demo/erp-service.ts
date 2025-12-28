import { type Reactive, type Ref, computed, ref } from "vue";
import { type FruitOrder, OrderStatus } from "./example-data";

interface ERPService {
    filter: Ref<OrderStatus[] | null>;
    filteredRows: Readonly<Ref<FruitOrder[]>>;

    cancelOrder(order: Pick<FruitOrder, "status">): void;
    confirmOrder(order: Pick<FruitOrder, "status">): void;
    startPacking(order: Pick<FruitOrder, "status">): void;
    stopPacking(order: Pick<FruitOrder, "status">): void;
    finalizePacking(order: Pick<FruitOrder, "status">): void;
    createInvoice(order: Pick<FruitOrder, "invoice">): void;

    isReadonly(order: Pick<FruitOrder, "status">): boolean;
    getOrderTotal(order: Pick<FruitOrder, "items">): number;
}

export function useERPService(rows: Reactive<FruitOrder[]>): ERPService {
    const filter = ref<OrderStatus[] | null>(null);
    const filteredRows = computed(() => {
        if (!filter.value) {
            return rows as FruitOrder[];
        }
        return rows.filter((it) => {
            return filter.value?.includes(it.status);
        }) as FruitOrder[];
    });

    function cancelOrder(order: Pick<FruitOrder, "status">): void {
        order.status = OrderStatus.CANCELLED;
    }

    function confirmOrder(order: Pick<FruitOrder, "status">): void {
        order.status = OrderStatus.CONFIRMED;
    }

    function startPacking(order: Pick<FruitOrder, "status">): void {
        order.status = OrderStatus.PROCESSING;
    }

    function stopPacking(order: Pick<FruitOrder, "status">): void {
        order.status = OrderStatus.CONFIRMED;
    }

    function finalizePacking(order: Pick<FruitOrder, "status">): void {
        order.status = OrderStatus.INTRANSIT;
    }

    function createInvoice(order: Pick<FruitOrder, "invoice">): void {
        const ids = rows
            .map((it) => it.invoice)
            .filter((it): it is number => {
                return Boolean(it);
            });
        order.invoice = Math.max(...ids) + 1;
    }

    function isReadonly(order: Pick<FruitOrder, "status">): boolean {
        return (
            order.status > OrderStatus.PROCESSING ||
            order.status === OrderStatus.CANCELLED
        );
    }

    function getOrderTotal(order: Pick<FruitOrder, "items">): number {
        return (
            /* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- technical debt */
            order.items?.reduce(
                (total, item) => total + item.price * item.quantity,
                0,
            ) ?? 0
        );
    }

    return {
        filter,
        filteredRows,
        cancelOrder,
        confirmOrder,
        startPacking,
        stopPacking,
        finalizePacking,
        createInvoice,
        isReadonly,
        getOrderTotal,
    };
}
