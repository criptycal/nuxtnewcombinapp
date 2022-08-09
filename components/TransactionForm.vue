<script lang="ts">
  import { defineComponent } from "vue";
  import { Transaction } from "../interfaces/Transaction";
  import { postTransactions } from "../services/transactions";

  export default defineComponent({

    data(){
      return{
        transaction: {} as Transaction,
        paymentMethodClass: '' as string,
        cardNumberClass: '' as string,
        paymentAmountClass: '' as string,
        paymentDateClass: '' as string,
        barcodeClass: '' as string,
      }
    },
    methods: {
        async submit(){
          this.paymentMethodClass = '';
          this.cardNumberClass = '';
          this.paymentAmountClass = '';
          this.paymentDateClass = '';
          this.barcodeClass = '';

          if(!this.transaction.paymentMethod){
            this.paymentMethodClass = 'is-invalid';
          }

          if(!this.transaction.paymentAmount){
            this.paymentAmountClass = 'is-invalid';
          }

          if(this.transaction.paymentMethod === 'Credit Card' || this.transaction.paymentMethod === 'Debit Card'){
            if(!this.transaction.cardNumber){
              this.cardNumberClass = 'is-invalid';
            }
          }

          if(!this.transaction.paymentDate){
            this.paymentDateClass = 'is-invalid';
          }

          if(!this.transaction.barcode){
            this.barcodeClass = 'is-invalid';
          }
          
          
        }
      }
    });
  
</script>

<template>
  <div class="container w-25">
    <h1>Pagar Boleta</h1>

    <form @submit.prevent="submit()" novalidate>
      <div class="mb-3">
        <label class="form-label">Payment Method</label>
        <select class="form-control " :class="paymentMethodClass" v-model="transaction.paymentMethod">
          <option value="" disabled>Seleccione una opción</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="Cash">Cash</option>
        </select>
        <div class="invalid-feedback">
          Payment Method is required
        </div>
      </div>
      <div class="mb-3" v-if="transaction.paymentMethod === 'Credit Card' || transaction.paymentMethod === 'Debit Card'">
        <label class="form-label">Card Number</label>
        <input type="number" class="form-control" :class="cardNumberClass" v-model="transaction.cardNumber" placeholder="1234567891011">
        <div class="invalid-feedback">
          Card Number is required
        </div>

      </div>
      <div class="mb-3">
        <label class="form-label">Payment Amount</label>
        <input type="number" class="form-control" :class="paymentAmountClass" v-model="transaction.paymentAmount" placeholder="Payment Amount">
        <div class="invalid-feedback">
          Payment Amount is required
          </div>
      </div>
      <div class="mb-3">
        <label class="form-label">Payment Date</label>
        <input type="date" class="form-control" :class="paymentDateClass" v-model="transaction.paymentDate">
        <div class="invalid-feedback">
          Payment Date is required
          </div>
      </div>
      <div class="mb-3">
        <label class="form-label">Barcode</label>
        <input type="text" :class="barcodeClass" v-model="transaction.barcode" class="form-control" placeholder="1234567891011">
        <div class="invalid-feedback">
          Barcode is required
          </div>
      </div>
      <button class="btn btn-primary mt-3">Save</button>
    </form>

    
  </div>
  
</template>

<style scoped></style>
