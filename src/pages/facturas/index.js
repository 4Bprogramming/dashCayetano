import React from 'react'
import styles from './facturas.module.css'
import Image from 'next/image'

function Facturas() {
  return (
    <div>
      <div className={styles.invoiceWrapper} id='print-area'>
        <div className={styles.invoice}>
          <div className={styles.invoiceContainer}>
            <div className={styles.invoiceHead}>
              <div className={styles.invoiceHeadTop}>
                <div className={styles.invoiceHeadTopLeft}>
                  <div className={styles.textStart}>
                    <Image src='/images/cayetano.png' alt='cayetano' width={200} height={200} />
                  </div>
                </div>
                <div className={styles.invoiceHeadTopRight}>
                  <div className={styles.textEnd}>{/* <h3>Factura</h3> */}</div>
                </div>
              </div>
              <div className={styles.hr}></div>
              <div className={styles.invoiceHeadMiddle}>
                <div className={styles.invoiceHeadMiddleLeft}>
                  <div className={styles.textStart}>
                    <p>
                      <span className={styles.textBold}>Fecha</span>: 05/12/2020
                    </p>
                  </div>
                </div>
                <div className={styles.invoiceHeadMiddleRight}>
                  <div className={styles.textEnd}>
                    <p>
                      <span className={styles.textBold}>Factura N°:</span>16789
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.hr}></div>
              <div className={styles.invoiceHeadBottom}>
                <div className={styles.invoiceHeadBottomLeft}>
                  <ul className={styles.ul}>
                    <li className={styles.textBold}>Cliente:</li>
                    <li>npmbre apellido</li>
                    <li>dirección</li>
                    <li>teléfono</li>
                    <li>localidad</li>
                  </ul>
                </div>
                <div className={styles.invoiceHeadBottomRight}>
                  <ul className={styles.textEnd}>
                    <li className={styles.textBold}>Pay To:</li>
                    <li>Koice Inc.</li>
                    <li>2705 N. Enterprise</li>
                    <li>Orange, CA 89438</li>
                    <li>contact@koiceinc.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.overflowView}>
              <div className={styles.invoiceBody}>
                <table>
                  <thead>
                    <tr>
                      <td className={styles.textBold}>N° de cuota</td>
                      <td className={styles.textBold}>Descripción</td>
                      <td className={styles.textBold}>Precio</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>003</td>
                      <td>
                        <select>
                          <option>Efectivo</option>
                          <option>divisa</option>
                          <option>Tarjeta</option>
                        </select>{' '}
                      </td>
                      <td className={styles.textEnd}>$500.00</td>
                    </tr>
                    <tr>
                      <td>004</td>
                      <td>
                        <select>
                          <option>Efectivo</option>
                          <option>divisa</option>
                          <option>Tarjeta</option>
                        </select>
                      </td>

                      <td className={styles.textEnd}>$500.00</td>
                    </tr>
                    <tr>
                      <td>005</td>
                      <td>
                        <select>
                          <option>Efectivo</option>
                          <option>divisa</option>
                          <option>Tarjeta</option>
                        </select>
                      </td>

                      <td className={styles.textEnd}>$500.00</td>
                    </tr>
                    
                  </tbody>
                </table>
                <div className={styles.invoiceBodyBottom}>
                  <div className={styles.invoiceBodyInfoItem}>
                    <div className={styles.infoItemTd}>Total:</div>
                    <div className={styles.infoItemTd}>$21365.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='invoice-foot textCenter'>
              <p>
                <span className={styles.textCenter}>NOTA:&nbsp;</span>esto es un recibo de Caja.
              </p>

              <div className={styles.invoiceBtns}>
                <button type='button' className={styles.btnCancelar}>
                  <span>
                   
                  </span>
                  <span>Cancelar</span>
                </button>
                <button type='button' className={styles.btnDescarga}>
                  <span>
                  
                  </span>
                  <span >Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facturas
