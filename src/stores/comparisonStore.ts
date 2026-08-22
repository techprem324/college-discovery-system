import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface ComparisonStoreState {
  selectedCollegeIds: string[];
  maxCapacity: number;
  
  // Actions
  addCollege: (id: string) => { success: boolean; message?: string };
  removeCollege: (id: string) => void;
  toggleCollege: (id: string) => { success: boolean; message?: string };
  clearAll: () => void;
  hasCollege: (id: string) => boolean;
}

export const useCompareStore = create<ComparisonStoreState>()(
  persist(
    (set, get) => ({
      selectedCollegeIds: ["col-iit-bombay", "col-iit-delhi"], // pre-populated with 2 for initial experience
      maxCapacity: 3,

      hasCollege: (id: string) => {
        return get().selectedCollegeIds.includes(id);
      },

      addCollege: (id: string) => {
        const { selectedCollegeIds, maxCapacity } = get();
        if (selectedCollegeIds.includes(id)) {
          return { success: true };
        }
        if (selectedCollegeIds.length >= maxCapacity) {
          return {
            success: false,
            message: `Comparison limit reached! You can compare up to ${maxCapacity} colleges side-by-side.`
          };
        }
        set({ selectedCollegeIds: [...selectedCollegeIds, id] });
        return { success: true };
      },

      removeCollege: (id: string) => {
        set({
          selectedCollegeIds: get().selectedCollegeIds.filter((item) => item !== id)
        });
      },

      toggleCollege: (id: string) => {
        const { selectedCollegeIds, addCollege, removeCollege } = get();
        if (selectedCollegeIds.includes(id)) {
          removeCollege(id);
          return { success: true };
        } else {
          return addCollege(id);
        }
      },

      clearAll: () => {
        set({ selectedCollegeIds: [] });
      }
    }),
    {
      name: 'campusiq-compare-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
