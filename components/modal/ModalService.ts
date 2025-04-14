import { WrapperProps as ModalData } from './modal_contents/Wrapper'

class ModalService {
    private modals: { data: ModalData; key: string }[] = []
    private updateCallback?: (modal: { data: ModalData; key: string } | null) => void

    private generateId(): string {
        return Math.random().toString(36).substring(2, 9)
    }

    private update_sub() {
        this.updateCallback ? this.updateCallback(this.modals.at(-1) ?? null) : {}
    }

    register_callback(callback: (modal: { data: ModalData; key: string } | null) => void): void {
        this.updateCallback = callback
    }

    update_modal(id: string, newData: ModalData) {
        const index = this.modals.findIndex((m) => m.key === id)
        if (index !== -1) {
            this.modals[index].data = newData
            this.update_sub()
        }
    }

    close_modal(key?: string): void {
        if (key) {
            this.modals = this.modals.filter((m) => m.key !== key)
        } else {
            this.modals.pop()
        }
        this.update_sub()
    }

    create_modal(data: ModalData): string {
        const key = this.generateId()
        this.modals.push({ data, key })
        this.update_sub()
        return key
    }
}

const ModalServiceSingleton = new ModalService()
export default ModalServiceSingleton
