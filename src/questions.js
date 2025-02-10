export const questions = {
    easy: [
        //{ question: "Quelle est cette forme ?", options: ["Carré", "Cercle", "Triangle"], answer: "Carré", image: "square.jpg" }, // test avec image
        { 
            question: "Que représente le 'S' dans SOLID ?", 
            options: [
                "A) Single Responsibility Principle", 
                "B) Systematic Design Principle", 
                "C) Software Reliability Principle", 
                "D) Strong Encapsulation Principle"
            ],
            answer: "A" 
        },
        { 
            question: "Que représente le 'O' dans SOLID ?", 
            options: [
                "A) Object-Oriented Principle", 
                "B) Open/Closed Principle", 
                "C) Optimization Principle", 
                "D) Overloading Principle"
            ], 
            answer: "B" 
        },
        { 
            question: "Que représente le 'L' dans SOLID ?", 
            options: [
                "A) Limited Scope Principle", 
                "B) Local Inheritance Principle", 
                "C) Liskov Substitution Principle", 
                "D) Layered Abstraction Principle"
            ], 
            answer: "C" 
        },
        { 
            question: "Que représente le 'I' dans SOLID ?", 
            options: [
                "A) Interface Segregation Principle", 
                "B) Inheritance Safety Principle", 
                "C) Instance Control Principle", 
                "D) Independent Software Principle"
            ], 
            answer: "A" 
        },
        { 
            question: "Que représente le 'D' dans SOLID ?", 
            options: [
                "A) Dependency Inversion Principle", 
                "B) Data Abstraction Principle", 
                "C) Distributed Systems Principle", 
                "D) Dynamic Typing Principle"
            ], 
            answer: "A" 
        },
        { 
            question: "Qu'est-ce que le principe de responsabilité unique ?", 
            options: [
                "A) Une classe doit avoir plus d'une raison de changer.", 
                "B) Une classe doit avoir une seule raison de changer.", 
                "C) Une classe doit être responsable de plusieurs tâches.", 
                "D) Une classe doit être indépendante des autres classes."
            ], 
            answer: "B" 
        },
        { 
            question: "Quel est le but principal du principe de l'ouverture/fermeture (Open/Closed Principle) ?", 
            options: [
                "A) Les classes doivent être ouvertes à la modification.", 
                "B) Les classes doivent être fermées à l'extension.", 
                "C) Les classes doivent être ouvertes à l'extension mais fermées à la modification.",
            ], 
            answer: "C" 
        },
        { 
            question: "Quel principe SOLID stipule qu'une classe doit être ouverte à l'extension mais fermée à la modification ?", 
            options: [
                "A) Principe de responsabilité unique", 
                "B) Principe de l'ouverture/fermeture", 
                "C) Principe de substitution de Liskov", 
                "D) Principe de ségrégation des interfaces"
            ], 
            answer: "B" 
        },
        { 
            question: "Quel principe encourage à utiliser des interfaces spécifiques plutôt qu'une interface générale ?", 
            options: [
                "A) Principe de l'ouverture/fermeture", 
                "B) Principe de substitution de Liskov", 
                "C) Principe de ségrégation des interfaces", 
                "D) Principe d'inversion des dépendances"
            ], 
            answer: "C" 
        },
        { 
            question: "Pourquoi le principe de responsabilité unique est-il important ?", 
            options: [
                "A) Il empêche d'utiliser des interfaces", 
                "B) Il évite que des classes aient trop de responsabilités",
            ], 
            answer: "B" 
        },
        { 
            question: "Quel est le principe qui vise à réduire les dépendances entre les modules d'un projet ?", 
            options: [
                "A) Principe de responsabilité unique", 
                "B) Principe d'inversion des dépendances", 
                "C) Principe de substitution de Liskov"
            ], 
            answer: "B" 
        },
        { 
            question: "Pourquoi le principe de ségrégation des interfaces est-il utile ?", 
            options: [
                "A) Il évite aux classes d'implémenter des méthodes inutiles",
                "B) Il supprime complètement l'utilisation des interfaces", 
                "C) Il interdit l'héritage"
            ], 
            answer: "A" 
        },
        { 
            question: "Quel est le principal avantage de l'application des principes SOLID ?", 
            options: [
                "A) Réduire la lisibilité du code", 
                "B) Augmenter la complexité du projet", 
                "C) Améliorer la maintenabilité et la flexibilité du code", 
                "D) Éliminer complètement les erreurs de programmation"
            ], 
            answer: "C" 
        },
        { 
            question: "Dans SOLID, pourquoi l'Open/Closed Principle est-il crucial ?", 
            options: [
                "A) Il empêche d'ajouter de nouvelles fonctionnalités", 
                "B) Il permet d'étendre le code sans modifier les classes existantes", 
                "C) Il interdit la surcharge de méthodes", 
                "D) Il oblige à tout coder en programmation fonctionnelle"
            ], 
            answer: "B" 
        },
        { 
            question: "Un code qui respecte SOLID est :", 
            options: [
                "A) Facile à modifier et à faire évoluer", 
                "B) Impossible à refactoriser", 
                "C) Moins structuré", 
                "D) Toujours plus rapide à exécuter"
            ], 
            answer: "A" 
        },
        { 
            question: "Que se passe-t-il si une classe enfreint le principe de substitution de Liskov ?", 
            options: [
                "A) Elle ne peut pas être compilée", 
                "B) Elle peut provoquer des erreurs en remplaçant une classe parent", 
                "C) Elle fonctionne normalement sans problème", 
                "D) Elle devient une classe abstraite"
            ], 
            answer: "B" 
        },
        { 
            question: "Les classes qui respectent SOLID doivent :", 
            options: [
                "A) Avoir une seule responsabilité", 
                "B) Être aussi grandes que possible", 
                "C) Tout gérer dans une seule méthode", 
                "D) Toujours hériter d'une autre classe"
            ], 
            answer: "A" 
        },
        { 
            question: "Que signifie “fermé à la modification” dans l'Open/Closed Principle ?", 
            options: [
                "A) Une classe doit toujours être ouverte à la modification", 
                "B) Une classe doit être modifiable uniquement par son créateur", 
                "C) Une classe existante ne doit pas être modifiée directement mais étendue",
            ], 
            answer: "C" 
        },
        { 
            question: "Le principe de ségrégation des interfaces implique :", 
            options: [
                "A) Que les classes doivent implémenter des interfaces générales", 
                "B) Que les interfaces doivent être adaptées aux besoins spécifiques des classes", 
                "C) Que toutes les classes doivent avoir la même interface", 
                "D) Que les interfaces ne doivent pas contenir plus d'une méthode"
            ], 
            answer: "B" 
        },
        { 
            question: "Une classe qui respecte le Single Responsibility Principle :", 
            options: [
                "A) Effectue une seule tâche spécifique", 
                "B) Gère plusieurs responsabilités", 
                "C) Ne peut pas être instanciée", 
                "D) Contient un grand nombre de méthodes différentes"
            ], 
            answer: "A" 
        }
    ],    
    medium: [
        { 
            question: "Quel principe encourage l'utilisation de l'abstraction plutôt que de dépendre directement de classes concrètes ?", 
            options: [
                "A) Principe de substitution de Liskov", 
                "B) Principe d'inversion des dépendances", 
                "C) Principe de responsabilité unique", 
                "D) Principe de l'ouverture/fermeture"
            ], 
            answer: "B" 
        },
        { 
            question: "Quel problème peut apparaître si une classe ne respecte pas le principe de substitution de Liskov ?", 
            options: [
                "A) Une sous-classe pourrait ne pas se comporter comme la classe mère attendue", 
                "B) Le code sera trop court et difficile à comprendre", 
                "C) Il deviendra impossible d'utiliser l'héritage", 
                "D) Les objets ne pourront plus être instanciés"
            ], 
            answer: "A" 
        },
        { 
            question: "Que se passe-t-il si une classe a trop de responsabilités ?", 
            options: [
                "A) Elle devient plus facile à tester", 
                "B) Elle est plus difficile à modifier sans affecter plusieurs parties du code", 
                "C) Elle est plus performante", 
                "D) Elle respecte mieux les principes SOLID"
            ], 
            answer: "B" 
        },
        { 
            question: "Pourquoi le principe SOLID est-il recommandé ?", 
            options: [
                "A) Pour compliquer le code et empêcher la modification", 
                "B) Pour interdire l'héritage", 
                "C) Pour rendre le code plus difficile à comprendre",
                "D) Pour améliorer la structure et la maintenabilité du code", 
            ], 
            answer: "D" 
        },
        { 
            question: "Que permet d'éviter l'application du principe d'inversion des dépendances ?", 
            options: [
                "A) La dépendance directe aux classes concrètes", 
                "B) L'utilisation des interfaces", 
                "C) L'instanciation dynamique des dépendances d'objets",
            ], 
            answer: "A" 
        },
        { 
            question: "Le principe de substitution de Liskov empêche :", 
            options: [
                "A) L'héritage entre classes", 
                "B) L'utilisation d'interfaces", 
                "C) Les erreurs causées par une mauvaise utilisation de l'héritage", 
                "D) La création de classes abstraites"
            ], 
            answer: "C" 
        },
        { 
            question: "Pourquoi l'utilisation excessive de l'héritage peut-elle poser problème dans le cadre des principes SOLID ?", 
            options: [
                "A) Parce qu'elle viole le principe de responsabilité unique", 
                "B) Parce qu'elle peut mener à un couplage trop fort entre les classes", 
                "C) Parce qu'elle empêche l'utilisation de classes abstraites", 
                "D) Parce qu'elle interdit l'utilisation de polymorphisme"
            ], 
            answer: "B" 
        },
        { 
            question: "Un développeur décide de modifier une classe existante pour ajouter une nouvelle fonctionnalité. Quel principe pourrait être enfreint ?", 
            options: [
                "A) Le principe de l'inversion des dépendances", 
                "B) Le principe de substitution de Liskov", 
                "C) Le principe de l'ouverture/fermeture", 
                "D) Le principe de responsabilité unique"
            ], 
            answer: "C" 
        },
        { 
            question: "Quel problème principal peut survenir lorsqu'on ne respecte pas le principe d'inversion des dépendances ?", 
            options: [
                "A) Le code devient plus flexible et modulaire", 
                "B) La maintenance du code devient plus difficile en raison du couplage fort aux classes concrètes", 
                "C) Il devient impossible d'instancier des objets", 
                "D) On ne peut plus utiliser de classes abstraites"
            ], 
            answer: "B" 
        },
        { 
            question: "Quel principe est le plus utile pour réduire les effets négatifs d'un couplage fort entre les classes ?", 
            options: [
                "A) Le principe de l'inversion des dépendances", 
                "B) Le principe de substitution de Liskov", 
                "C) Le principe de responsabilité unique", 
                "D) Le principe de l'ouverture/fermeture"
            ], 
            answer: "A" 
        },
        { 
            question: "Le principe d'inversion des dépendances recommande de :", 
            options: [
                "A) Toujours utiliser l'héritage pour structurer le code", 
                "B) Éviter l'utilisation d'interfaces", 
                "C) Rendre les modules de haut niveau indépendants des modules de bas niveau", 
                "D) Dépendre directement des classes concrètes"
            ], 
            answer: "C" 
        },
    ],
    hard: [
        { 
            question: "Pourquoi le principe de responsabilité unique est-il essentiel dans le développement logiciel ?", 
            options: [
                "A) Il permet de regrouper plusieurs fonctionnalités dans une seule classe", 
                "B) Il améliore la testabilité et la maintenance du code", 
                "C) Il empêche d'utiliser des classes abstraites", 
                "D) Il interdit l'héritage multiple"
            ], 
            answer: "B" 
        },
        { 
            question: "Quel est l'objectif principal du principe de substitution de Liskov ?", 
            options: [
                "A) Une classe dérivée doit pouvoir remplacer sa classe mère sans modifier le comportement du programme", 
                "B) Une classe mère ne doit jamais être héritée", 
                "C) Les classes doivent être finales", 
                "D) Une classe fille ne peut pas ajouter de nouvelles fonctionnalités"
            ], 
            answer: "A" 
        },
        { 
            question: "Quelle modification respecte le principe Open/Closed (O) ?", 
            options: [
                "A) Ajouter une condition if dans une classe existante pour gérer un nouveau cas", 
                "B) Modifier une classe pour gérer un nouvel algorithme sans toucher au reste du code", 
                "C) Hériter d'une classe et surcharger une méthode existante", 
                "D) Ajouter une nouvelle classe qui implémente une interface existante"
            ], 
            answer: "D" 
        },
        { 
            question: "Quelle solution respecte le principe de Ségrégation des Interfaces (I) ?", 
            options: [
                "A) Remplacer une grosse interface par plusieurs petites interfaces spécifiques", 
                "B) Ajouter plus de méthodes à une interface existante pour couvrir plus de cas", 
                "C) Supprimer les interfaces et utiliser uniquement des classes abstraites", 
                "D) Imposer aux classes l'implémentation d'une interface complète, même si elles n'utilisent pas toutes ses méthodes"
            ], 
            answer: "A" 
        },
        { 
            question: "Quelle affirmation est fausse concernant les principes SOLID ?", 
            options: [
                "A) Ils favorisent un code plus modulaire et évolutif", 
                "B) Ils permettent d'éliminer complètement le couplage entre classes", 
                "C) Ils aident à concevoir des systèmes plus faciles à maintenir", 
                "D) Ils réduisent le risque d'effets de bord lors des modifications"
            ], 
            answer: "B" 
        },
    ]
};