import { createClient } from "@/lib/supabase/server";
import { PageHeader } from "@/components/layout/PageHeader";
import { Users, History, Target, Vote } from "lucide-react";
import { TeamSection } from "@/components/sections/TeamSection";
import { SmoothScrollNav } from "@/components/common/SmoothScrollNav";
import type { TeamMember } from "@/lib/team";

const sections = [
    { id: "misiya", title: "Мисия и Визия", icon: "Target" },
    { id: "istoriya", title: "История", icon: "History" },
    { id: "ekip", title: "Екип", icon: "Users" },
    { id: "uchenicheski-savet", title: "Ученически съвет", icon: "Vote" },
];

export default async function AboutPage() {
    const supabase = await createClient();

    const { data: teachers } = await supabase
        .from("teachers")
        .select("*")
        .order("name");

    const members: TeamMember[] = (teachers ?? []).map((t) => ({
        id: t.id,
        name: t.name,
        role: t.role,
        email: t.email ?? "",
        category: t.category,
        image_url: t.image_url,
    }));

    return (
        <div className="min-h-screen bg-background">
            <PageHeader
                title="За Нас"
                description="Всичко най-важно за СУ 'Св. Климент Охридски' - гр. Пещера на едно място."
            />

            <SmoothScrollNav sections={sections} />

            <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 space-y-16 md:space-y-24">

                {/* Mission Section */}
                <section id="misiya" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 md:mb-8 flex items-center">
                        <Target className="mr-3 md:mr-4 text-secondary shrink-0" /> Мисия и Визия
                    </h2>
                    <div className="bg-card/50 border border-border rounded-2xl p-5 md:p-8 backdrop-blur-sm">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-4">Мисия</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Създаване на възможно най-добри условия за развитие на личността и потенциала на всеки един ученик, така че да се постигне пълноценна трудова и социална интеграция в обществото.
                                </p>
                                <h3 className="text-xl font-bold text-foreground mb-4">Визия</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Утвърждаване на СУ „Св. Климент Охридски" като конкурентоспособно училище, способно да формира у учениците национални и общочовешки добродетели при подготовката им за социализация и реализация.
                                </p>
                            </div>
                            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                                <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                                    Mission Image
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* History Section */}
                <section id="istoriya" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 md:mb-8 flex items-center">
                        <History className="mr-3 md:mr-4 text-secondary shrink-0" /> История
                    </h2>
                    <div className="space-y-6 md:space-y-8 relative border-l border-border ml-3 md:ml-8 pl-6 md:pl-12">
                        {[
                            { year: "1907", title: "Начало", text: "Поставено е началото на Пещерската гимназия с откриването на IV клас (днешен VIII). Поради липса на средства класът е закрит след две години." },
                            { year: "1922", title: "Ново начало", text: "Гимназията е възстановена с 63 ученици в две паралелки. До 1931 г. броят на учениците нараства, а класовете достигат до VII." },
                            { year: "1937", title: "Патрон Св. Климент Охридски", text: "Учителският съвет избира за патрон на училището Свети Климент Охридски. Година по-късно за пръв път се отбелязва 8 декември – празникът на Гимназията." },
                            { year: "1939", title: "Пълна гимназия", text: "Открит е VIII клас и училището става Пълна смесена гимназия \u201EСв. Кл. Охридски\u201C. На 29 юни тържествено е осветено знамето в присъствието на министри и народни представители." },
                            { year: "1957", title: "Държавно признание", text: "С Указ на Президиума на Народното събрание училището е наградено с орден \u201EКирил и Методий\u201C \u2013 II степен." },
                            { year: "1969", title: "Клас-автомат КОМ-ПАК-69", text: "Създаден е първият в България клас-автомат за тестово изпитване с автоматична проверка – дело на учителя по физика Матей Терзиев и гл. ас. Петър Галанов." },
                            { year: "1979", title: "Нова сграда", text: "Завършен е строежът на новата училищна сграда с 28 класни стаи, кабинети, лаборатории и модерна за времето си техника. Училището е преименувано на ЕСПУ \u201EКлимент Охридски\u201C." },
                            { year: "1982", title: "Орден \u201EКирил и Методий\u201C \u2013 I степен", text: "С Указ на Държавния съвет на НРБ училището получава най-високото си държавно отличие." },
                            { year: "1985", title: "Компютърна ера", text: "Гимназията става първото училище в общината с компютърна техника. Оборудвана е специална зала с 12 компютъра, формирани са кръжоци за ученици и курсове за учители." },
                            { year: "1995", title: "Танцов ансамбъл \u201EСлавейче\u201C", text: "Към училището е създаден танцов ансамбъл, който постепенно прераства в общински." },
                            { year: "2005–2010", title: "Обновяване", text: "Сградата е санирана и модернизирана, отговаряйки на съвременните изисквания за енергоефективност." },
                            { year: "2019", title: "Дигитална трансформация", text: "МОН отпуска 142 000 лв. за пълно обновяване – плазмени екрани и лаптопи във всеки кабинет, три компютърни зали и видеонаблюдение." },
                        ].map((item, index) => (
                            <div key={index} className="relative">
                                <div className="absolute -left-[31px] md:-left-[57px] top-1 h-4 w-4 md:h-5 md:w-5 rounded-full border-4 border-background bg-secondary" />
                                <span className="text-secondary font-bold text-xs md:text-sm mb-1 block">{item.year}</span>
                                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 md:mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm md:text-base">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Team Section */}
                <section id="ekip" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 md:mb-8 flex items-center">
                        <Users className="mr-3 md:mr-4 text-secondary shrink-0" /> Екип
                    </h2>
                    <TeamSection members={members} />
                </section>

                {/* School Council Section */}
                <section id="uchenicheski-savet" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4 md:mb-6 flex items-center">
                        <Vote className="mr-3 md:mr-4 text-secondary shrink-0" /> Ученически съвет
                    </h2>
                    <div className="bg-card/30 p-5 md:p-8 rounded-xl border border-border space-y-4 text-foreground/80 leading-relaxed text-sm md:text-base">
                        <p>
                            Ученическият съвет при СУ „Свети Климент Охридски" гр. Пещера е създаден през 2008г. Основната му задача е да събира, обменя и популяризира мненията и идеите на учениците. Участниците в съвета- млади и изобретателни, имат за цел да бъдат полезни на себе си и на училището, а надеждите им са: &quot;ЗАЕДНО да превърнем училището в желана територия на ученика!&quot; Дали е възможно…?!?! Това е труден въпрос, на който дори и най-големият оптимист би се затруднил да отговори. Ученическият съвет има правото и задължението да действа в такова сътрудничество с училищното настоятелство, ръководството на училището и педагогическия съвет, че да съумее да направи и по-приятно, и по-полезно времето прекарано в СУ „Свети Климент Охридски" гр. Пещера.
                        </p>
                        <p>
                            За годините на своето съществуване Ученическият съвет успя да създаде правила за работата си, да направи план за дейностите си и да създаде свои традиции, към които се придържа и спазва. Успехите в работата му се дължат не само на настоящите му членове. Без подкрепата и разбирането на учителите и ръководството на училището, инициативите на Ученически съвет не биха били толкова обхватни и стойностни, каквито са днес.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
}
