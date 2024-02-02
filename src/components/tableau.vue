<template>
  <main class="main">
    <div class="list">
      <div class="flex">
        <div
          class="glass nav-card glass-card-top glass-blur radius widthmax"
          style="margin: 2px"
        >
          <div class="cardos widthmax">Nombre total de candidats 16</div>
        </div>

        <div class="glass nav-card glass-card-top glass-blur radius widthmax">
          <div class="cardos widthmax">
            candidats actifs {{ calculateActivePercentage() }}
          </div>
        </div>
      </div>

      <div class="glass nav-card glass-card glass-blur radius widthmax">
        <div class="cardos">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Commentaire</th>
                <th scope="col">Status</th>
                <th scope="col">Promotion</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(student, index) in students" :key="index">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ student.name }}</td>
                <td>{{ student.commentaire }}</td>
                <td
                  class="statut"
                  :class="{
                    success: student.status === 'Active',
                    secondary: student.status === 'Inactive',
                  }"
                >
                  {{ student.status }}
                </td>
                <td>{{ student.promotion }}</td>
                <td><a :href="getStudentLink(index)">VOIR</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "TableauPage",
  // Autres propriétés et méthodes du composant

  data() {
    return {
      students: [
        {
          name: "Harnoufi Mohammed",
          commentaire: "Stagiaire VUE.JS",
          status: "Active",
          promotion: "Promo 1",
        },
        {
          name: "Emily Martin",
          commentaire: "Développeur Back-end",
          status: "Inactive",
          promotion: "Promo 3",
        },
        {
          name: "Ethan Johnson",
          commentaire: "Data Analyst",
          status: "Inactive",
          promotion: "Promo 2",
        },
        {
          name: "Isabella Rodriguez",
          commentaire: "DevOPS",
          status: "Active",
          promotion: "promo 1",
        },
        {
          name: "Aiden Patel",
          commentaire: "Developpeur Front-End React",
          status: "Active",
          promotion: "",
        },
        {
          name: "Jane Smith",
          commentaire: "Développeur Back-end",
          status: "Inactive",
          promotion: "Promo 3",
        },
        {
          name: "John Doe",
          commentaire: "Développeur Front-end",
          status: "Active",
          promotion: "Promo 2",
        },
        {
          name: "Jane Smith",
          commentaire: "Développeur Back-end",
          status: "Inactive",
          promotion: "Promo 3",
        },
        {
          name: "Alice Johnson",
          commentaire: "Développeur Full-stack",
          status: "Active",
          promotion: "Promo 4",
        },
        {
          name: "Bob Williams",
          commentaire: "Développeur Mobile",
          status: "Inactive",
          promotion: "Promo 5",
        },
      ],
    };
  },
  methods: {
    //implémentation de l'index
    getStudentLink(index) {
      return `/student/${index + 1}`;
    },
    calculateActivePercentage() {
      const totalStudents = this.students.length;
      const activeStudents = this.students.filter(
        (student) => student.status === "Active"
      ).length;
      // Dans le cas ou pas d'élèves
      if (totalStudents === 0) {
        return "0%";
      }

      const percentage = Math.round((activeStudents / totalStudents) * 100);

      return percentage + "%";
    },
  },
};
</script>
<style scoped>
body {
  background: black;
}
.success {
  background-color: green !important;
}

.secondary {
  background: rgb(82, 80, 80) !important;
}
.statut {
  border-radius: 20px;

  width: 110px;
  height: 35px;
}

/*STYLE GLOBAL*/
</style>