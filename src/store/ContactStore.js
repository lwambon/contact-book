import { create } from 'zustand';

const useContactStore = create((set) => ({
  contacts: [],
  addContact: (contact) => set((state) => ({ contacts: [...state.contacts, contact] })),
  updateContact: (index, updatedContact) => set((state) => {
    const contacts = [...state.contacts];
    contacts[index] = updatedContact;
    return { contacts };
  }),
  deleteContact: (index) => set((state) => ({
    contacts: state.contacts.filter((_, i) => i !== index)
  })),
  disableContact: (index) => set((state) => {
    const contacts = [...state.contacts];
    contacts[index].disabled = true;
    return { contacts };
  }),
}));

export default useContactStore;
