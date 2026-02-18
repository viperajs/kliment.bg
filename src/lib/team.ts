export type TeamCategory = "management" | "teachers" | "support";

export interface TeamMember {
    id?: string;
    name: string;
    role: string;
    email: string;
    category: TeamCategory;
    image_url?: string | null;
}

export const categoryLabels: Record<TeamCategory, string> = {
    management: "Ръководство",
    teachers: "Учители",
    support: "Обслужващ персонал",
};
