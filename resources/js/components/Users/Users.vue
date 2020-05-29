<template>
  <div class="users__table">
    <v-data-table
      :headers="headers"
      :items="dataUsers"
      :page.sync="pagination.page"
      :items-per-page="itemsPerPage"
      :loading="loading"
      :search="search"
      hide-default-footer
      class="users__table__item"
      @page-count="pagination.pageCount = $event"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title class="m-right-1">Users</v-toolbar-title>
          <v-dialog v-model="dialog" max-width="700px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model="editedItem.name" :rules="rules.name" label="User Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model="editedItem.email" :rules="rules.email" label="E-mail"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" v-if="editedIndex === -1">
                      <v-text-field
                        v-model="editedItem.password"
                        :rules="rules.password"
                        label="Password"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-spacer class="hide-sm"></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="fal fa-search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-toolbar>
      </template>

      <template v-slot:item.avatar="{ item }">
        <v-avatar size="60" class="my-2">
          <v-img width="60" :src="item.avatar" v-if="item.avatar"></v-img>
          <v-icon width="60" v-else>fal fa-user-circle</v-icon>
        </v-avatar>
      </template>

      <template v-slot:item.email="{ item }">
        <a :href="`mailto:${item.email}`">{{item.email}}</a>
      </template>

      <template v-slot:item.actions="{ item }">
        <div class="d-flex">
          <div class="edit">
            <v-icon small class="mr-2" @click="editItem(item)">fal fa-pen</v-icon>
          </div>
          <div class="del">
            <v-icon small @click="deleteItem(item)">fal fa-trash-alt</v-icon>
          </div>
        </div>
      </template>

      <template v-slot:no-data>
        <v-btn color="primary" @click="getData">Reset</v-btn>
      </template>

      <template v-slot:footer>
        <div class="text-right py-4 d-flex">
          <v-pagination
            next-icon="fal fa-angle-right"
            prev-icon="fal fa-angle-left"
            v-model="pagination.page"
            :length="pagination.pageCount"
          ></v-pagination>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import CallAPI from "./../CallAPI";
export default {
  name: "TabUsers",
  data() {
    return {
      loading: true,
      search: "",
      pagination: {
        page: 1,
        pageCount: 0
      },
      itemsPerPage: 13,
      dialog: false,
      dataUsers: [],
      headers: [
        {
          text: "User name",
          align: "left",
          value: "name"
        },
        { text: "Avatar", value: "avatar", sortable: false },
        { text: "Email", value: "email", sortable: false },
        { text: "Actions", value: "actions", sortable: false, align: "center" }
      ],
      editedIndex: -1,
      editedItem: {
        id: 0,
        name: "",
        avatar: "",
        email: "",
        password: ""
      },
      defaultItem: {
        id: 0,
        name: "",
        avatar: "",
        email: "",
        password: ""
      },
      rules: {
        avatar: [
          value =>
            !value ||
            value.size < 2000000 ||
            "Avatar size should be less than 2 MB!"
        ],
        email: [
          v => !!v || "E-mail is required",
          v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        name: [
          v => !!v || "Your Name required",
          v =>
            (v && v.length <= 50) || "Your Name must be less than 50 characters"
        ],
        password: [
          v => !!v || "Password is required",
          v =>
            (v && v.length <= 50) || "Password must be less than 50 characters",
          v => (v && v.length > 6) || "Password is greater than 6 characters"
        ]
      }
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let localData = localStorage.getItem("users");
      let feachData;
      if (!localData) {
        /**
         * @type {Object}
         */
        feachData = await CallAPI("api/v1/users");
        try {
          this.loading = false;
          this.dataUsers = feachData.data;
          this.dataUsers.sort(function(a, b) {
            return b.id - a.id;
          });
          localStorage.setItem("users", JSON.stringify(this.dataUsers));
        } catch (error) {
          this.loading = true;
        }
      } else {
        this.dataUsers = JSON.parse(localData);
        this.loading = false;
      }
    },
    editItem(item) {
      this.editedIndex = this.dataUsers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    async deleteItem(item) {
      const index = this.dataUsers.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.dataUsers.splice(index, 1) &&
        (await CallAPI(`api/v1/users/${item.id}`, "DELETE"));
      localStorage.setItem("users", JSON.stringify(this.dataUsers));
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    async save() {
      if (this.editedIndex > -1) {
        /**
         * Edit
         */
        Object.assign(this.dataUsers[this.editedIndex], this.editedItem);
        await CallAPI(
          `api/v1/users/${this.editedItem.id}`,
          "PATCH",
          this.editedItem
        );
        localStorage.setItem("users", JSON.stringify(this.dataUsers));
      } else {
        /**
         * new
         */
        this.dataUsers.unshift(this.editedItem);
        await CallAPI("api/v1/users", "POST", this.editedItem);
        localStorage.setItem("users", JSON.stringify(this.dataUsers));
      }
      this.close();
    }
  }
};
</script>

<style lang="scss" scope>
.users {
  &__table {
    &__item {
      th {
        i {
          padding: 0 5px;
        }
      }
      a {
        transition: 0.5s;
        &:hover {
          color: #000;
        }
      }
      .v {
        &-pagination {
          justify-content: flex-end;
        }
        &-toolbar {
          &__content {
            @media (max-width: 480px) {
              flex-wrap: wrap;
              .v{
                &-input {
                width: 100%;
              }
              &-btn{
                width: 50%;
              }
              }
            }
          }
          &__title {
            @media (max-width: 480px) {
              width: 50%;
              margin: 0;
              text-align:left;
            }
          }
        }
        &-data-table__wrapper {
          @media (max-width: 480px) {
            margin: 2.5em 0 0;
          }
        }
      }

      .edit,
      .del {
        width: 50%;
        text-align: center;
      }
    }
  }
}
</style>
