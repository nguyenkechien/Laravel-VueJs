<template>
  <div class="companies__table">
    <v-data-table
      :headers="headers"
      :items="dataCompanies"
      :page.sync="pagination.page"
      :items-per-page="itemsPerPage"
      :loading="loading"
      hide-default-footer
      class="companies__table__item"
      @page-count="pagination.pageCount = $event"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Companies</v-toolbar-title>
          <v-spacer></v-spacer>
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
                      <v-text-field v-model="editedItem.name" label="Company name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model="editedItem.address" label="Address"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model="editedItem.website" label="Website"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
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
        </v-toolbar>
      </template>
      <template v-slot:item.website="{ item }">
        <a :href="item.website" target="_blank" rel="noopener noreferrer">{{item.website}}</a>
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
import { _dataCompanies } from "./_dataCompanies";
import CallAPI from "./../CallAPI";
export default {
  name: "TabCompanies",
  data() {
    return {
      loading: true,
      pagination: {
        page: 1,
        pageCount: 0
      },
      itemsPerPage: 13,
      dialog: false,
      dataCompanies: [],
      headers: [
        {
          text: "Company name",
          align: "left",
          value: "name"
        },
        { text: "Address", value: "address", sortable: false },
        { text: "Website", value: "website", sortable: false },
        { text: "Email", value: "email", sortable: false },
        { text: "Actions", value: "actions", sortable: false, align: "center", }
      ],
      editedIndex: -1,
      editedItem: {
        id: 0,
        name: "",
        address: "",
        website: "",
        email: ""
      },
      defaultItem: {
        id: 0,
        name: "",
        address: "",
        website: "",
        email: ""
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
      /**
       * @type {Array}
       */
      let dataCompanies = await CallAPI("api/v1/companies");
      try {
        this.loading = false;
      } catch (error) {
        this.loading = true;
      }
      this.dataCompanies = dataCompanies.data;
    },
    editItem(item) {
      this.editedIndex = this.dataCompanies.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    async deleteItem(item) {
      const index = this.dataCompanies.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.dataCompanies.splice(index, 1) &&
        await CallAPI(`api/v1/companies/${item.id}`, "DELETE");
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
        Object.assign(this.dataCompanies[this.editedIndex], this.editedItem);
        await CallAPI(`api/v1/companies/${this.editedItem.id}`, "PATCH", this.editedItem);
      } else {
        /**
         * new
         */
        this.dataCompanies.push(this.editedItem);
        await CallAPI("api/v1/companies", "POST", this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style lang="scss" scope>
.companies {
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
      }

      .edit, .del{
        width: 50%;
        text-align: center;
      }
    }
  }
}
</style>