import { ClassItem } from "@/interfaces/classes";

const classes = [
  [
    {
      name: "Algoritmo e Programação de Computadores",
      code: "FACOM49010",
      classHrs: 3,
      labHrs: 1,
      totalHrs: 4,
    },
    {
      name: "Cálculo Diferencial e Integral I",
      code: "FAMAT49010",
      classHrs: 6,
      labHrs: 0,
      totalHrs: 6,
    },
    {
      name: "Desenho Técnico",
      code: "FEMEC41011",
      classHrs: 3,
      labHrs: 0,
      totalHrs: 3,
    },
    {
      name: "Educação para o Meio Ambiente",
      code: "IGUFU49010",
      classHrs: 2,
      labHrs: 0,
      totalHrs: 2,
    },
    {
      name: "Geometria Analítica",
      code: "FAMAT49011",
      classHrs: 5,
      labHrs: 0,
      totalHrs: 5,
    },
    {
      name: "Introdução à Engenharia Mecatrônica",
      code: "FEMEC42010",
      classHrs: 2,
      labHrs: 1,
      totalHrs: 3,
    },
    {
      name: "Química Básica",
      code: "IQUFU49011",
      classHrs: 3,
      labHrs: 1,
      totalHrs: 4,
    },
  ],
  [
    {
      name: "Algebra Linear",
      code: "FAMAT49022",
      classHrs: 3,
      labHrs: 0,
      totalHrs: 3,
    },
    {
      name: "Cálculo Diferencial e Integral II",
      code: "FAMAT49020",
      requirementCode: "FAMAT49010",
      classHrs: 6,
      labHrs: 0,
      totalHrs: 6,
    },
    {
      name: "Desenho de Máquinas",
      code: "FEMEC41021",
      requirementCode: "FEMEC41011",
      classHrs: 2,
      labHrs: 2,
      totalHrs: 4,
    },
    {
      name: "Estatística",
      code: "FAMAT49021",
      classHrs: 4,
      labHrs: 0,
      totalHrs: 4,
    },
    {
      name: "Física Geral I",
      code: "INFIS49020",
      classHrs: 4,
      labHrs: 0,
      totalHrs: 4,
    },
    {
      name: "Física Experimental I",
      code: "INFIS49021",
      classHrs: 0,
      labHrs: 2,
      totalHrs: 2,
    },
    {
      name: "Programação Aplicada à Engenharia",
      code: "FEMEC41020",
      classHrs: 0,
      labHrs: 2,
      totalHrs: 2,
    },
  ],
  [
    {
      name: "Cálculo Diferencial e Integral III",
      code: "FAMAT49030",
      requirementCode: "FAMAT49020",
      classHrs: 6,
      labHrs: 0,
      totalHrs: 6,
    },
    {
      name: "Cinemática",
      code: "FEMEC41030",
      requirementCode: "INFIS49020",
      classHrs: 3,
      labHrs: 0,
      totalHrs: 3,
    },
    {
      name: "Estática",
      code: "INFIS49032",
      requirementCode: "INFIS49020",
      classHrs: 4,
      labHrs: 0,
      totalHrs: 4,
    },
    {
      name: "Física Geral II",
      code: "INFIS49030",
      requirementCode: "FAMAT49020",
      classHrs: 6,
      labHrs: 0,
      totalHrs: 6,
    },
    {
      name: "Física Experimental II",
      code: "INFIS49031",
      classHrs: 0,
      labHrs: 2,
      totalHrs: 2,
    },
    {
      name: "Introdução à Ciência dos Materiais",
      code: "FEMEC42031",
      requirementCode: "IQUFU49011",
      classHrs: 3,
      labHrs: 1,
      totalHrs: 4,
    },
    {
      name: "Projeto Assistido por Computador",
      code: "FEMEC42032",
      requirementCode: "FEMEC41021",
      classHrs: 1,
      labHrs: 2,
      totalHrs: 3,
    },
  ],
  [
    {
      name: "Dinâmica",
      code: "FEMEC41040",
      requirementCode: "FEMEC41030",
      classHrs: 4,
      labHrs: 0,
      totalHrs: 4,
    },
    {
      name: "Eletrônica Básica p/ Mecatrônica",
      code: "FEMEC42041",
      requirementCode: "INFIS49030",
      classHrs: 5,
      labHrs: 1,
      totalHrs: 6,
    },
    {
      name: "Mecânica dos Sólidos",
      code: "INFIS49040",
      requirementCode: "INFIS49032",
      classHrs: 5,
      labHrs: 1,
      totalHrs: 6,
    },
    {
      name: "Mét. Matemáticos Aplicados à Engenharia",
      code: "FAMAT49040",
      requirementCode: "FAMAT49030",
      classHrs: 5,
      labHrs: 0,
      totalHrs: 5,
    },
    {
      name: "Metrologia",
      code: "FEMEC41041",
      requirementCode: "FAMAT49021",
      classHrs: 2,
      labHrs: 2,
      totalHrs: 4,
    },
    {
      name: "Óptica",
      code: "INFIS49060",
      classHrs: 2,
      labHrs: 0,
      totalHrs: 2,
    },
    {
      name: "Laboratório de Ótica",
      code: "INFIS49061",
      classHrs: 0,
      labHrs: 1,
      totalHrs: 1,
    },
  ],
  [
    {
      name: "Arquitetura e Organização de Computadores I",
      code: "FACOM49050",
      classHrs: 4,
      labHrs: 0,
      totalHrs: 4,
    },
    {
      name: "Cálculo Numérico",
      code: "FAMAT49050",
      requirementCode: "FAMAT49040",
      classHrs: 5,
      labHrs: 0,
      totalHrs: 5,
    },
    {
      name: "Circuitos Elétricos p/ Mecatrônica",
      code: "FEELT49050",
      requirementCode: "INFIS49030",
      classHrs: 4,
      labHrs: 1,
      totalHrs: 5,
    },
    {
      name: "Materiais p/ Engenharia",
      code: "FEMEC42050",
      requirementCode: "FEMEC42031",
      classHrs: 2,
      labHrs: 1,
      totalHrs: 3,
    },
    {
      name: "Psico. Aplicada ao Trabalho",
      code: "IPUFU49050",
      requiredHours: 1500,
      classHrs: 2,
      labHrs: 0,
      totalHrs: 2,
    },
    {
      name: "Resistência dos Materiais",
      code: "INFIS49050",
      requirementCode: "INFIS49040",
      classHrs: 6,
      labHrs: 0,
      totalHrs: 6,
    },
    {
      name: "Termodinâmica Aplicada",
      code: "FEMEC41051",
      requirementCode: "FAMAT49040",
      classHrs: 4,
      labHrs: 1,
      totalHrs: 5,
    },
  ],
  [
    {
      name: "Controle de Sistemas Lineares",
      code: "FEMEC42060",
      classHrs: 4,
      labHrs: 1,
      totalHrs: 5,
    },
    {
      name: "Dinâmica de Máquinas",
      code: "FEMEC41061",
      requirementCode: "FEMEC41040",
      classHrs: 4,
      labHrs: 0,
      totalHrs: 4,
    },
    {
      name: "Elementos de Construção Mecânica",
      code: "FEMEC42062",
      requirementCode: "INFIS49050",
      classHrs: 4,
      labHrs: 0,
      totalHrs: 4,
    },
    {
      name: "Eletrônica Digital",
      code: "FEELT49040",
      classHrs: 2,
      labHrs: 2,
      totalHrs: 4,
    },
    {
      name: "Sist. de Controle Hidráulicos e Pneumáticos",
      code: "FEMEC41080",
      classHrs: 3,
      labHrs: 1,
      totalHrs: 4,
    },
    {
      name: "Sistemas Operacionais",
      code: "FACOM49060",
      requirementCode: "FACOM49050",
      classHrs: 4,
      labHrs: 0,
      totalHrs: 4,
    },
    {
      name: "Transferência de Calor I",
      code: "FEMEC41060",
      requirementCode: "FAMAT49040",
      classHrs: 4,
      labHrs: 1,
      totalHrs: 5,
    },
  ],
  [
    {
      name: "Arquitetura de Redes de Computadores",
      code: "FACOM49070",
      requirementCode: "FACOM49050",
      classHrs: 4,
      labHrs: 0,
      totalHrs: 4,
    },
    {
      name: "Controle Digital de Sistemas",
      code: "FEMEC42071",
      requirementCode: "FEMEC42060",
      classHrs: 3,
      labHrs: 1,
      totalHrs: 4,
    },
    {
      name: "Conversão de Energia de Máq. Elétricas",
      code: "FEELT49070",
      requirementCode: "FEELT49050",
      classHrs: 4,
      labHrs: 1,
      totalHrs: 5,
    },
    {
      name: "Instrumentação",
      code: "FEELT41070",
      requirementCode: "FEMEC42041",
      classHrs: 3,
      labHrs: 1,
      totalHrs: 4,
    },
    {
      name: "Mecânica dos Fluídos I",
      code: "FEMEC41050",
      requirementCode: "FAMAT49040",
      classHrs: 4,
      labHrs: 1,
      totalHrs: 5,
    },
    {
      name: "Processos de Fabricação Mecânica",
      code: "FEMEC42073",
      classHrs: 4,
      labHrs: 1,
      totalHrs: 5,
    },
  ],
  [
    {
      name: "Bancos de Dados",
      code: "FACOM49080",
      requirementCode: "FACOM49010",
      classHrs: 3,
      labHrs: 1,
      totalHrs: 4,
    },
    {
      name: "Eletrônica de Potência p/ Mecatrônica",
      code: "FEMEC42080",
      requirementCode: "FEMEC42041/FEELT49070",
      classHrs: 3,
      labHrs: 1,
      totalHrs: 4,
    },
    {
      name: "Gestão dos Sistemas de Produção",
      code: "FEMEC42081",
      classHrs: 3,
      labHrs: 0,
      totalHrs: 3,
    },
    {
      name: "Processamento Digital de Sinais",
      code: "FEELT49080",
      classHrs: 4,
      labHrs: 0,
      totalHrs: 4,
    },
    {
      name: "Redes Industriais",
      code: "FEMEC42082",
      requirementCode: "FACOM49070",
      classHrs: 2,
      labHrs: 1,
      totalHrs: 3,
    },
    {
      name: "Simulação de Sistemas Automatizados",
      code: "FEMEC42083",
      requirementCode: "FAMAT49021",
      classHrs: 2,
      labHrs: 1,
      totalHrs: 3,
    },
    {
      name: "Sistemas Digitais p/ Mecatrônica",
      code: "FEELT49081",
      requirementCode: "FACOM49050",
      classHrs: 2,
      labHrs: 2,
      totalHrs: 4,
    },
  ],
  [
    {
      name: "Administração",
      code: "FAGEN49090",
      requiredHours: 1500,
      classHrs: 4,
      labHrs: 0,
      totalHrs: 4,
    },
    {
      name: "Automação Industrial",
      code: "FEMEC42091",
      requirementCode: "FEMEC41080/FEELT49040",
      classHrs: 2,
      labHrs: 2,
      totalHrs: 4,
    },
    {
      name: "Economia",
      code: "IEUFU49090",
      requiredHours: 1500,
      classHrs: 4,
      labHrs: 0,
      totalHrs: 4,
    },
    {
      name: "Fabricação Assistida por Computador",
      code: "FEMEC41094",
      requirementCode: "FEMEC42073",
      classHrs: 2,
      labHrs: 0,
      totalHrs: 2,
    },
    {
      name: "Instalações Elétricas Industriais",
      code: "FEMEC42092",
      requirementCode: "FEELT49070",
      classHrs: 4,
      labHrs: 0,
      totalHrs: 4,
    },
    {
      name: "Projeto de Fim de Curso I",
      code: "FEMEC42093",
      requiredHours: 2700,
      classHrs: 2,
      labHrs: 0,
      totalHrs: 2,
    },
    {
      name: "Robótica",
      code: "FEMEC42094",
      requirementCode: "FEMEC41061",
      classHrs: 3,
      labHrs: 1,
      totalHrs: 4,
    },
  ],
  [
    {
      name: "Projeto de Fim de Curso II",
      code: "FEMEC42100",
      requirementCode: "FEMEC42093",
      classHrs: 0,
      labHrs: 2,
      totalHrs: 2,
    },
  ],
];

export const specialRequiredActivities = {
  requiredInternship: {
    name: "Estágio Obrigatório",
    code: "FEMEC42120",
    requiredHours: 2700,
    classHrs: 0,
    labHrs: 12,
    totalHrs: 12,
  },
  complementaryAcademicActivities: {
    name: "Atividades Acadêmicas Complementares",
    code: "FEMEC42110",
    min: 90,
  },
  humanityAndSocialScienceClasses: [
    {
      name: "Direito e Legislação",
      code: "FADIR49111",
      requiredHours: 1500,
      classHrs: 3,
      labHrs: 0,
      totalHrs: 3,
    },
    {
      name: "Ciências Sociais e Jurídicas",
      code: "FADIR49110",
      requiredHours: 1500,
      classHrs: 4,
      labHrs: 0,
      totalHrs: 4,
    },
    {
      name: "Direito Empresarial",
      code: "FADIR49112",
      requiredHours: 1500,
      classHrs: 4,
      labHrs: 0,
      totalHrs: 4,
    },
  ],
};

export default classes;

class ClassesMaped {
  values: Record<string, ClassItem>;
  requestedClassesMap?: Map<string, Array<string>>;

  constructor() {
    [this.values, this.requestedClassesMap] = this._init();
  }

  private _init(): [Record<string, ClassItem>, Map<string, Array<string>>] {
    let temp: Array<[string, ClassItem]> = [];
    classes.map((item: ClassItem[]) => {
      temp = temp.concat(
        item.map((classItem) => {
          return [classItem.code, classItem];
        })
      );
    });

    let requestedClassesMap = this._requestedClassesMap(temp);

    return [Object.fromEntries(temp), requestedClassesMap];
  }

  /**
   * Create a map of classes that is a required class
   * for some class in the curricular grade. The key
   * is the name of the class and the value is an
   * array of class names that has the respective class
   * as required or has a class that has a required class
   * linked to that class.
   */
  private _requestedClassesMap(
    entriesValues: Array<[string, ClassItem]>
  ): Map<string, Array<string>> {
    let temp = new Map();

    entriesValues.reverse().map(([key, classItem]: [string, ClassItem]) => {
      if (
        classItem.requirementCode === undefined ||
        classItem.requirementCode === null
      )
        return;

      let requirementCode = classItem.requirementCode.split("/");

      requirementCode.map((requiredItem) => {
        if (temp.get(classItem.code)) {
          if (temp.get(requiredItem)) {
            temp.set(
              requiredItem,
              temp
                .get(requiredItem)
                .concat(classItem.code, temp.get(classItem.code))
            );
          } else {
            temp.set(
              requiredItem,
              temp.get(classItem.code).concat(classItem.code)
            );
          }
        } else {
          if (temp.get(requiredItem)) {
            temp.set(
              requiredItem,
              temp.get(requiredItem).concat(classItem.code)
            );
          } else {
            temp.set(requiredItem, [classItem.code]);
          }
        }
      });
    });
    return temp;
  }
}

const classesMapped = new ClassesMaped();

export { classesMapped };
