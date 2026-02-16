export type TeamCategory = "management" | "teachers" | "support";

export interface TeamMember {
    name: string;
    role: string;
    email: string;
    category: TeamCategory;
}

export const categoryLabels: Record<TeamCategory, string> = {
    management: "Ръководство",
    teachers: "Учители",
    support: "Обслужващ персонал",
};

export const teamMembers: TeamMember[] = [
    // ─── Management ───
    {
        name: "Павлинка Антониева Шопова-Начкова",
        role: "Директор",
        email: "pavlinka.shopova-nachkova@edu.mon.bg",
        category: "management",
    },
    {
        name: "Иван Филчев Филчев",
        role: "Заместник-директор",
        email: "ivan.fi.filchev@edu.mon.bg",
        category: "management",
    },

    // ─── Teachers ───
    {
        name: "Айрие Нуреттин Пехливан",
        role: "Начален учител",
        email: "ayrie.pehlivan@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Айлин Емин Павлова",
        role: "Учител по Английски език",
        email: "ailin.pavlova@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Анастасия Викторова Мераклиева",
        role: "Учител по Физика и Математика",
        email: "anastasia.meraklieva@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Аксиния Петкова Попова",
        role: "Начален учител",
        email: "aksinia.popova@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Ваня Руменова Иванова",
        role: "Учител по Български език",
        email: "vanya.r.ivanova@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Георги Иванов Шопов",
        role: "Учител по Физическо възпитание и спорт",
        email: "georgi.iv.shopov1@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Гергана Веселинова Ангелчова",
        role: "Учител по История и география",
        email: "gergana.angelchova@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Гинка Атанасова Григорова",
        role: "Начален учител",
        email: "ginka.grigorova@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Дамяна Иванова Райкова-Янева",
        role: "Учител ГЦОУД",
        email: "damiana.raikova@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Димка Николова Герджикова",
        role: "Учител по Математика",
        email: "dimka.gerdzhikova@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Евгения Ангелова Дамянова",
        role: "Учител ГЦОУД",
        email: "evgenia.a.damianova@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Елена Тодорова Гивечева-Михова",
        role: "Педагогически съветник",
        email: "elena.t.givecheva@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Елена Николова Доркова",
        role: "Учител ГЦОУД",
        email: "elena.dorkova@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Илиана Росенова Пейковска",
        role: "Учител по Химия",
        email: "iliana.peykovska@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Йорданка Георгиева Филипова",
        role: "Учител ГЦОУД",
        email: "iordanka.filipova@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Кристина Руменова Хаджиева",
        role: "Учител ГЦОУД",
        email: "kristina.hadzhieva@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Маргарита Васкова Проданова",
        role: "Учител ГЦОУД",
        email: "margarita.prodanova@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Мария Иванова Стоименова",
        role: "Учител по Музика",
        email: "maria.iv.stoimenova@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Мария Михайлова Атанасова",
        role: "Учител по Информационни технологии",
        email: "maria.mi.atanasova@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Милена Георгиева Балтаджиева",
        role: "Учител по Изобразително изкуство",
        email: "milena.baltadzhieva@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Милен Николаев Бараков",
        role: "Учител ГЦОУД",
        email: "milen.ni.barakov@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Нина Стоева Гемджиян",
        role: "Начален учител",
        email: "nina.gemdzhiian@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Нели Илиева Славова",
        role: "Учител по Български език",
        email: "neli.il.slavova@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Нина Пейчинова Михайлова",
        role: "Начален учител",
        email: "nina.pe.mihaylova@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Петя Иванова Георгиева",
        role: "Учител по Биология",
        email: "petya.iv.georgieva1@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Радка Лазарова Попова",
        role: "Учител по Английски език",
        email: "radka.ibisheva@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Ружка Георгиева Вранчева",
        role: "Учител по Физическо възпитание и спорт",
        email: "ruzhka.vrancheva@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Славка Стефанова Чанакчалиева",
        role: "Учител по Информационни технологии",
        email: "slavka.chanakchalieva@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "София Георгиева Якимова",
        role: "Учител по Математика",
        email: "sofia.yakimova@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Стела Апостолова Христова",
        role: "Учител по Английски език",
        email: "stela.a.hristova@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Христина Костадинова Хаджиева",
        role: "Учител по История и география",
        email: "hristina.hadzhieva@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Цветка Павлова Петкова",
        role: "Учител по Български език",
        email: "tsvetka.petkova@edu.mon.bg",
        category: "teachers",
    },
    {
        name: "Юсуф Ахмедов Мехмедов",
        role: "Учител по Информационни технологии",
        email: "yusuf.mehmedov@edu.mon.bg",
        category: "teachers",
    },

    // ─── Support Staff ───
    {
        name: "Цветана Стоянова Кънчева",
        role: "Счетоводител",
        email: "tsvetana.kancheva@edu.mon.bg",
        category: "support",
    },
    {
        name: "Мария Петрова Цветанова",
        role: "Завеждащ административна служба",
        email: "mariia.pe.tsvetanova@edu.mon.bg",
        category: "support",
    },
    {
        name: "Сузана Илианова Денисова",
        role: "Домакин",
        email: "suzana.denisova@edu.mon.bg",
        category: "support",
    },
    {
        name: "Анка Атанасова Комбова",
        role: "Хигиенист",
        email: "anka.kombova@edu.mon.bg",
        category: "support",
    },
    {
        name: "Даниела Димитрова Босева",
        role: "Хигиенист",
        email: "daniela.boseva@edu.mon.bg",
        category: "support",
    },
    {
        name: "Нина Атанасова Атанасова",
        role: "Хигиенист",
        email: "nina.at.atanasova@edu.mon.bg",
        category: "support",
    },
    {
        name: "Райна Петрова Гюзелева",
        role: "Хигиенист",
        email: "rayna.gyuzeleva@edu.mon.bg",
        category: "support",
    },
    {
        name: "Сезгин Юсеинова Веиз",
        role: "Хигиенист",
        email: "sezgin.veiz@edu.mon.bg",
        category: "support",
    },
    {
        name: "Димитър Йорданов Мантаров",
        role: "Огняр",
        email: "dimitar.io.mantarov@edu.mon.bg",
        category: "support",
    },
    {
        name: "Ясен Левентов Билянов",
        role: "Работник поддръжка",
        email: "iasen.bilianov@edu.mon.bg",
        category: "support",
    },
];
